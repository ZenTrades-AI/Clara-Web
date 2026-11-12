// Submits a custom form to a HubSpot form through the Forms API (no auth needed, CORS enabled).
// https://legacydocs.hubspot.com/docs/methods/forms/submit_form

export const HUBSPOT_PORTAL_ID = "45865556";
// Same form the site's "Book Demo" pop-up uses (see openHubSpotForm in hubspotForm.ts).
export const HUBSPOT_DEMO_FORM_ID = "c3428dcb-b18c-4277-b463-b7869c42800f";

export interface HubSpotField {
  name: string;
  value: string;
}

interface HubSpotError {
  message?: string;
  errorType?: string;
}

const readCookie = (name: string) =>
  document.cookie
    .split("; ")
    .find((c) => c.startsWith(name + "="))
    ?.split("=")[1];

/**
 * Posts the fields to the HubSpot form. If HubSpot rejects fields the form doesn't define
 * (FIELD_NOT_IN_FORM_DEFINITION), it resends without them, so extra fields never cost a lead.
 * Resolves with the field names HubSpot accepted; throws if the submission still fails.
 */
export async function submitToHubSpotForm(
  fields: HubSpotField[],
  formId = HUBSPOT_DEMO_FORM_ID
): Promise<string[]> {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`;
  const hutk = readCookie("hubspotutk");
  let remaining = fields.filter((f) => f.value.trim() !== "");

  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: remaining,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
          ...(hutk ? { hutk } : {}),
        },
      }),
    });
    if (res.ok) return remaining.map((f) => f.name);

    const body = (await res.json().catch(() => ({}))) as { errors?: HubSpotError[] };
    const unknown = (body.errors || [])
      .filter((e) => e.errorType === "FIELD_NOT_IN_FORM_DEFINITION")
      .map((e) => /fields\.([\w-]+)/.exec(e.message || "")?.[1])
      .filter((n): n is string => !!n && n !== "email");
    if (!unknown.length) {
      throw new Error(`HubSpot submission failed (${res.status}): ${JSON.stringify(body.errors || body)}`);
    }
    remaining = remaining.filter((f) => !unknown.includes(f.name));
  }
  throw new Error("HubSpot submission failed after removing unknown fields");
}

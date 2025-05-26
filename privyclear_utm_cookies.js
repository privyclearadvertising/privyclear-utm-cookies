<script>
/**
 * privyclear‑utm‑cookies using GTM variables
 * Saves UTM params + gclid from GTM URL variables into 1st‑party cookies.
 * MIT‑licensed – © 2025 Privy Clear Advertising
 */
(function () {
  const TTL_DAYS = 90;
  const MAP = {
    utm_source: '{{URL – utm_source}}',
    utm_medium: '{{URL – utm_medium}}',
    utm_campaign: '{{URL – utm_campaign}}',
    utm_term: '{{URL – utm_term}}',
    utm_content: '{{URL – utm_content}}',
    gclid: '{{URL – gclid}}'
  };

  const root = '.' + location.hostname.split('.').slice(-2).join('.');
  const exp  = new Date(Date.now() + TTL_DAYS * 864e5).toUTCString();

  Object.keys(MAP).forEach(key => {
    var val = MAP[key];
    // GTM leaves variable as an empty string if not present
    if (!val) return;
    document.cookie = key + '=' + encodeURIComponent(val) +
                      ';path=/;domain=' + root +
                      ';expires=' + exp + ';SameSite=Lax';
  });
})();
</script>

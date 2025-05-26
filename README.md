# privyclear-utm-cookies
Persist UTM parameters and Google Ads GCLID as first‑party cookies via Google Tag Manager.
---

## Usage (Google Tag Manager)

### 1. Add the script
1. Tags → **New** → *Custom HTML*
2. Paste the contents of `privyclear_utm_cookies.js`
3. Trigger: **All Pages**

### 2. Create URL variables

| Variable name | Type | Component | Query Key |
|---------------|------|-----------|-----------|
| `URL – utm_source`   | URL | Query | `utm_source` |
| `URL – utm_medium`   | URL | Query | `utm_medium` |
| `URL – utm_campaign` | URL | Query | `utm_campaign` |
| `URL – utm_term`     | URL | Query | `utm_term` |
| `URL – utm_content`  | URL | Query | `utm_content` |
| `URL – gclid`        | URL | Query | `gclid` |

*Variables → New → URL → Component = Query → Query Key = value above → tick “Lower‑case”.*  

### 3. (Optional) expose cookies as GTM variables  
Variables → New → *1st‑Party Cookie*  
(e.g. `utm_source_cookie` → Cookie Name = `utm_source`).

### 4. Map to GA4 / Google Ads  
* GA4 Config → Fields to Set → `traffic_source` = `{{utm_source_cookie}}`, etc.  
* Ads offline conversions → include `{{gclid_cookie}}`.

### 5. Test  
Preview with `?utm_source=test&utm_medium=email&gclid=123` → check cookies in DevTools.



# IMPORT/EXPORT DATA FROM CONTENTFUL CMS

**!!!Make sure you have all the API keys!!!**

_You will need to put the values in the script_

---

##Get keys##

1. Space id
   - Change to master enviorement
   - Space settings => General settings
2. environmentId
   - Space settings => Enviorements => it's the name if the brance for example _master_
3. managementToken (unique)
   - # Space settings => API keys => Content management tokens => generate

##Insert keys in the script##

1. Export data from an enviorement (don't forget to change environmentId if you're working with multiple enviorements)

**_Export_**
`node export.js`

2. Inject/Import data that you've exported _(don't forget to change environmentId, the importing will go to that enviorement)_

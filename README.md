# Contacts Management
[Live link](https://neutron-contacts-management.vercel.app/)

## 📋 <a name="table">Table of Contents</a>
1. 🚎 [Quick Start](#getting-started)

## <a name="getting-started">🚎 Getting Started</a>

- Clone this repository by running this command in you cli
  ```bash
  git clone https://github.com/mhmitas/neutron-contacts-management.git
  ```
- create a `.env.local` file in the root of the project, and fill in the below variables
  ```bash
  # create a mongodb account and take the uri
  MONGODB_URI=

  # run this command `npx auth secret` in your cli to generate this variable 
  AUTH_SECRET=

  # already provided in the task submission email. Take from the email or create a Cloudinary account and take needed credentials
  CLOUDINARY_CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=

  # already provided in the task submission email. Take from the email or create from your account from this link `https://console.cloud.google.com/apis/credentials`
  AUTH_GOOGLE_ID=
  AUTH_GOOGLE_SECRET=
  ```

- Then, run the development server:

```bash
npm i
npm run dev
```

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  usersUrl: "http://localhost:8080/api/users",
  stocksUrl: "http://localhost:8081/api/stocks",
  forexUrl: "http://localhost:8081/api/forexes",
  ordersUrl: "http://localhost:8081/api/orders",
  capitalUrl: "http://localhost:8080/api/user-listings",
  optionsUrl: "http://localhost:8081/api/options",
  companiesUrl: "http://localhost:8083/api/companies",
  contractsUrl: "http://localhost:8082/api/contracts",
  contactsUrl: "http://localhost:8083/api/contacts",
  accountsUrl: "http://localhost:8083/api/accounts"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

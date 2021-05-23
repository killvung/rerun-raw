/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Fault', 'model/RunningRace'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Fault'), require('../model/RunningRace'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.RunningRacesApi = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.Fault, root.StravaApiV3.RunningRace);
  }
}(this, function(ApiClient, Fault, RunningRace) {
  'use strict';

  /**
   * RunningRaces service.
   * @module api/RunningRacesApi
   * @version 3.0.0
   */

  /**
   * Constructs a new RunningRacesApi. 
   * @alias module:api/RunningRacesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getRunningRaceById operation.
     * @callback module:api/RunningRacesApi~getRunningRaceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RunningRace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Running Race
     * Returns a running race for a given identifier.
     * @param {Number} id The identifier of the running race.
     * @param {module:api/RunningRacesApi~getRunningRaceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RunningRace}
     */
    this.getRunningRaceById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRunningRaceById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RunningRace;

      return this.apiClient.callApi(
        '/running_races/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRunningRaces operation.
     * @callback module:api/RunningRacesApi~getRunningRacesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RunningRace>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Running Races
     * Returns a list running races based on a set of search criteria.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Filters the list by a given year.
     * @param {module:api/RunningRacesApi~getRunningRacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RunningRace>}
     */
    this.getRunningRaces = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [RunningRace];

      return this.apiClient.callApi(
        '/running_races', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

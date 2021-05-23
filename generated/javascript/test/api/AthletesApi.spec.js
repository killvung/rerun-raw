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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StravaApiV3.AthletesApi();
  });

  describe('(package)', function() {
    describe('AthletesApi', function() {
      describe('getLoggedInAthlete', function() {
        it('should call getLoggedInAthlete successfully', function(done) {
          // TODO: uncomment getLoggedInAthlete call and complete the assertions
          /*

          instance.getLoggedInAthlete(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.DetailedAthlete);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.resourceState).to.be.a('number');
            expect(data.resourceState).to.be(0);
            expect(data.firstname).to.be.a('string');
            expect(data.firstname).to.be("");
            expect(data.lastname).to.be.a('string');
            expect(data.lastname).to.be("");
            expect(data.profileMedium).to.be.a('string');
            expect(data.profileMedium).to.be("");
            expect(data.profile).to.be.a('string');
            expect(data.profile).to.be("");
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data.sex).to.be.a('string');
            expect(data.sex).to.be("M");
            expect(data.premium).to.be.a('boolean');
            expect(data.premium).to.be(false);
            expect(data.summit).to.be.a('boolean');
            expect(data.summit).to.be(false);
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());
            expect(data.followerCount).to.be.a('number');
            expect(data.followerCount).to.be(0);
            expect(data.friendCount).to.be.a('number');
            expect(data.friendCount).to.be(0);
            expect(data.measurementPreference).to.be.a('string');
            expect(data.measurementPreference).to.be("feet");
            expect(data.ftp).to.be.a('number');
            expect(data.ftp).to.be(0);
            expect(data.weight).to.be.a('number');
            expect(data.weight).to.be(0.0);
            {
              let dataCtr = data.clubs;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(StravaApiV3.SummaryClub);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.resourceState).to.be.a('number');
                expect(data.resourceState).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.profileMedium).to.be.a('string');
                expect(data.profileMedium).to.be("");
                expect(data.coverPhoto).to.be.a('string');
                expect(data.coverPhoto).to.be("");
                expect(data.coverPhotoSmall).to.be.a('string');
                expect(data.coverPhotoSmall).to.be("");
                expect(data.sportType).to.be.a('string');
                expect(data.sportType).to.be("cycling");
                expect(data.city).to.be.a('string');
                expect(data.city).to.be("");
                expect(data.state).to.be.a('string');
                expect(data.state).to.be("");
                expect(data.country).to.be.a('string');
                expect(data.country).to.be("");
                expect(data._private).to.be.a('boolean');
                expect(data._private).to.be(false);
                expect(data.memberCount).to.be.a('number');
                expect(data.memberCount).to.be(0);
                expect(data.featured).to.be.a('boolean');
                expect(data.featured).to.be(false);
                expect(data.verified).to.be.a('boolean');
                expect(data.verified).to.be(false);
                expect(data.url).to.be.a('string');
                expect(data.url).to.be("");

                      }
            }
            {
              let dataCtr = data.bikes;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(StravaApiV3.SummaryGear);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.resourceState).to.be.a('number');
                expect(data.resourceState).to.be(0);
                expect(data.primary).to.be.a('boolean');
                expect(data.primary).to.be(false);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.distance).to.be.a('number');
                expect(data.distance).to.be(0.0);

                      }
            }
            {
              let dataCtr = data.shoes;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(StravaApiV3.SummaryGear);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.resourceState).to.be.a('number');
                expect(data.resourceState).to.be(0);
                expect(data.primary).to.be.a('boolean');
                expect(data.primary).to.be(false);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.distance).to.be.a('number');
                expect(data.distance).to.be(0.0);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getLoggedInAthleteZones', function() {
        it('should call getLoggedInAthleteZones successfully', function(done) {
          // TODO: uncomment getLoggedInAthleteZones call and complete the assertions
          /*

          instance.getLoggedInAthleteZones(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.Zones);
            expect(data.heartRate).to.be.a(StravaApiV3.HeartRateZoneRanges);
                  expect(data.heartRate.customZones).to.be.a('boolean');
              expect(data.heartRate.customZones).to.be(false);
              expect(data.heartRate.zones).to.be.a(StravaApiV3.ZoneRanges);
      
            expect(data.power).to.be.a(StravaApiV3.PowerZoneRanges);
                  expect(data.power.zones).to.be.a(StravaApiV3.ZoneRanges);
      

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getStats', function() {
        it('should call getStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getStats call and complete the assertions
          /*
          var id = 789;

          instance.getStats(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.ActivityStats);
            expect(data.biggestRideDistance).to.be.a('number');
            expect(data.biggestRideDistance).to.be(0.0);
            expect(data.biggestClimbElevationGain).to.be.a('number');
            expect(data.biggestClimbElevationGain).to.be(0.0);
            expect(data.recentRideTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.recentRideTotals.count).to.be.a('number');
              expect(data.recentRideTotals.count).to.be(0);
              expect(data.recentRideTotals.distance).to.be.a('number');
              expect(data.recentRideTotals.distance).to.be(0.0);
              expect(data.recentRideTotals.movingTime).to.be.a('number');
              expect(data.recentRideTotals.movingTime).to.be(0);
              expect(data.recentRideTotals.elapsedTime).to.be.a('number');
              expect(data.recentRideTotals.elapsedTime).to.be(0);
              expect(data.recentRideTotals.elevationGain).to.be.a('number');
              expect(data.recentRideTotals.elevationGain).to.be(0.0);
              expect(data.recentRideTotals.achievementCount).to.be.a('number');
              expect(data.recentRideTotals.achievementCount).to.be(0);
            expect(data.recentRunTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.recentRunTotals.count).to.be.a('number');
              expect(data.recentRunTotals.count).to.be(0);
              expect(data.recentRunTotals.distance).to.be.a('number');
              expect(data.recentRunTotals.distance).to.be(0.0);
              expect(data.recentRunTotals.movingTime).to.be.a('number');
              expect(data.recentRunTotals.movingTime).to.be(0);
              expect(data.recentRunTotals.elapsedTime).to.be.a('number');
              expect(data.recentRunTotals.elapsedTime).to.be(0);
              expect(data.recentRunTotals.elevationGain).to.be.a('number');
              expect(data.recentRunTotals.elevationGain).to.be(0.0);
              expect(data.recentRunTotals.achievementCount).to.be.a('number');
              expect(data.recentRunTotals.achievementCount).to.be(0);
            expect(data.recentSwimTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.recentSwimTotals.count).to.be.a('number');
              expect(data.recentSwimTotals.count).to.be(0);
              expect(data.recentSwimTotals.distance).to.be.a('number');
              expect(data.recentSwimTotals.distance).to.be(0.0);
              expect(data.recentSwimTotals.movingTime).to.be.a('number');
              expect(data.recentSwimTotals.movingTime).to.be(0);
              expect(data.recentSwimTotals.elapsedTime).to.be.a('number');
              expect(data.recentSwimTotals.elapsedTime).to.be(0);
              expect(data.recentSwimTotals.elevationGain).to.be.a('number');
              expect(data.recentSwimTotals.elevationGain).to.be(0.0);
              expect(data.recentSwimTotals.achievementCount).to.be.a('number');
              expect(data.recentSwimTotals.achievementCount).to.be(0);
            expect(data.ytdRideTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.ytdRideTotals.count).to.be.a('number');
              expect(data.ytdRideTotals.count).to.be(0);
              expect(data.ytdRideTotals.distance).to.be.a('number');
              expect(data.ytdRideTotals.distance).to.be(0.0);
              expect(data.ytdRideTotals.movingTime).to.be.a('number');
              expect(data.ytdRideTotals.movingTime).to.be(0);
              expect(data.ytdRideTotals.elapsedTime).to.be.a('number');
              expect(data.ytdRideTotals.elapsedTime).to.be(0);
              expect(data.ytdRideTotals.elevationGain).to.be.a('number');
              expect(data.ytdRideTotals.elevationGain).to.be(0.0);
              expect(data.ytdRideTotals.achievementCount).to.be.a('number');
              expect(data.ytdRideTotals.achievementCount).to.be(0);
            expect(data.ytdRunTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.ytdRunTotals.count).to.be.a('number');
              expect(data.ytdRunTotals.count).to.be(0);
              expect(data.ytdRunTotals.distance).to.be.a('number');
              expect(data.ytdRunTotals.distance).to.be(0.0);
              expect(data.ytdRunTotals.movingTime).to.be.a('number');
              expect(data.ytdRunTotals.movingTime).to.be(0);
              expect(data.ytdRunTotals.elapsedTime).to.be.a('number');
              expect(data.ytdRunTotals.elapsedTime).to.be(0);
              expect(data.ytdRunTotals.elevationGain).to.be.a('number');
              expect(data.ytdRunTotals.elevationGain).to.be(0.0);
              expect(data.ytdRunTotals.achievementCount).to.be.a('number');
              expect(data.ytdRunTotals.achievementCount).to.be(0);
            expect(data.ytdSwimTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.ytdSwimTotals.count).to.be.a('number');
              expect(data.ytdSwimTotals.count).to.be(0);
              expect(data.ytdSwimTotals.distance).to.be.a('number');
              expect(data.ytdSwimTotals.distance).to.be(0.0);
              expect(data.ytdSwimTotals.movingTime).to.be.a('number');
              expect(data.ytdSwimTotals.movingTime).to.be(0);
              expect(data.ytdSwimTotals.elapsedTime).to.be.a('number');
              expect(data.ytdSwimTotals.elapsedTime).to.be(0);
              expect(data.ytdSwimTotals.elevationGain).to.be.a('number');
              expect(data.ytdSwimTotals.elevationGain).to.be(0.0);
              expect(data.ytdSwimTotals.achievementCount).to.be.a('number');
              expect(data.ytdSwimTotals.achievementCount).to.be(0);
            expect(data.allRideTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.allRideTotals.count).to.be.a('number');
              expect(data.allRideTotals.count).to.be(0);
              expect(data.allRideTotals.distance).to.be.a('number');
              expect(data.allRideTotals.distance).to.be(0.0);
              expect(data.allRideTotals.movingTime).to.be.a('number');
              expect(data.allRideTotals.movingTime).to.be(0);
              expect(data.allRideTotals.elapsedTime).to.be.a('number');
              expect(data.allRideTotals.elapsedTime).to.be(0);
              expect(data.allRideTotals.elevationGain).to.be.a('number');
              expect(data.allRideTotals.elevationGain).to.be(0.0);
              expect(data.allRideTotals.achievementCount).to.be.a('number');
              expect(data.allRideTotals.achievementCount).to.be(0);
            expect(data.allRunTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.allRunTotals.count).to.be.a('number');
              expect(data.allRunTotals.count).to.be(0);
              expect(data.allRunTotals.distance).to.be.a('number');
              expect(data.allRunTotals.distance).to.be(0.0);
              expect(data.allRunTotals.movingTime).to.be.a('number');
              expect(data.allRunTotals.movingTime).to.be(0);
              expect(data.allRunTotals.elapsedTime).to.be.a('number');
              expect(data.allRunTotals.elapsedTime).to.be(0);
              expect(data.allRunTotals.elevationGain).to.be.a('number');
              expect(data.allRunTotals.elevationGain).to.be(0.0);
              expect(data.allRunTotals.achievementCount).to.be.a('number');
              expect(data.allRunTotals.achievementCount).to.be(0);
            expect(data.allSwimTotals).to.be.a(StravaApiV3.ActivityTotal);
                  expect(data.allSwimTotals.count).to.be.a('number');
              expect(data.allSwimTotals.count).to.be(0);
              expect(data.allSwimTotals.distance).to.be.a('number');
              expect(data.allSwimTotals.distance).to.be(0.0);
              expect(data.allSwimTotals.movingTime).to.be.a('number');
              expect(data.allSwimTotals.movingTime).to.be(0);
              expect(data.allSwimTotals.elapsedTime).to.be.a('number');
              expect(data.allSwimTotals.elapsedTime).to.be(0);
              expect(data.allSwimTotals.elevationGain).to.be.a('number');
              expect(data.allSwimTotals.elevationGain).to.be(0.0);
              expect(data.allSwimTotals.achievementCount).to.be.a('number');
              expect(data.allSwimTotals.achievementCount).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateLoggedInAthlete', function() {
        it('should call updateLoggedInAthlete successfully', function(done) {
          // TODO: uncomment, update parameter values for updateLoggedInAthlete call and complete the assertions
          /*
          var weight = 3.4;

          instance.updateLoggedInAthlete(weight, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.DetailedAthlete);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.resourceState).to.be.a('number');
            expect(data.resourceState).to.be(0);
            expect(data.firstname).to.be.a('string');
            expect(data.firstname).to.be("");
            expect(data.lastname).to.be.a('string');
            expect(data.lastname).to.be("");
            expect(data.profileMedium).to.be.a('string');
            expect(data.profileMedium).to.be("");
            expect(data.profile).to.be.a('string');
            expect(data.profile).to.be("");
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data.sex).to.be.a('string');
            expect(data.sex).to.be("M");
            expect(data.premium).to.be.a('boolean');
            expect(data.premium).to.be(false);
            expect(data.summit).to.be.a('boolean');
            expect(data.summit).to.be(false);
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());
            expect(data.followerCount).to.be.a('number');
            expect(data.followerCount).to.be(0);
            expect(data.friendCount).to.be.a('number');
            expect(data.friendCount).to.be(0);
            expect(data.measurementPreference).to.be.a('string');
            expect(data.measurementPreference).to.be("feet");
            expect(data.ftp).to.be.a('number');
            expect(data.ftp).to.be(0);
            expect(data.weight).to.be.a('number');
            expect(data.weight).to.be(0.0);
            {
              let dataCtr = data.clubs;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(StravaApiV3.SummaryClub);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.resourceState).to.be.a('number');
                expect(data.resourceState).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.profileMedium).to.be.a('string');
                expect(data.profileMedium).to.be("");
                expect(data.coverPhoto).to.be.a('string');
                expect(data.coverPhoto).to.be("");
                expect(data.coverPhotoSmall).to.be.a('string');
                expect(data.coverPhotoSmall).to.be("");
                expect(data.sportType).to.be.a('string');
                expect(data.sportType).to.be("cycling");
                expect(data.city).to.be.a('string');
                expect(data.city).to.be("");
                expect(data.state).to.be.a('string');
                expect(data.state).to.be("");
                expect(data.country).to.be.a('string');
                expect(data.country).to.be("");
                expect(data._private).to.be.a('boolean');
                expect(data._private).to.be(false);
                expect(data.memberCount).to.be.a('number');
                expect(data.memberCount).to.be(0);
                expect(data.featured).to.be.a('boolean');
                expect(data.featured).to.be(false);
                expect(data.verified).to.be.a('boolean');
                expect(data.verified).to.be(false);
                expect(data.url).to.be.a('string');
                expect(data.url).to.be("");

                      }
            }
            {
              let dataCtr = data.bikes;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(StravaApiV3.SummaryGear);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.resourceState).to.be.a('number');
                expect(data.resourceState).to.be(0);
                expect(data.primary).to.be.a('boolean');
                expect(data.primary).to.be(false);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.distance).to.be.a('number');
                expect(data.distance).to.be(0.0);

                      }
            }
            {
              let dataCtr = data.shoes;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(StravaApiV3.SummaryGear);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.resourceState).to.be.a('number');
                expect(data.resourceState).to.be(0);
                expect(data.primary).to.be.a('boolean');
                expect(data.primary).to.be(false);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.distance).to.be.a('number');
                expect(data.distance).to.be(0.0);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));

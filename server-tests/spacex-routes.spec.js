//grabbing app so supertest can wrap around it
const supertest = require("supertest")(require("../server/app"))
const expect = require("chai").expect

describe("Testing SpaceX requests", () => {
  describe("SpaceX Launch Routes", () => {
    it("/api/launches/past route fetches all past SpaceX launches", () => {
      return supertest
        .get("/api/launches/pasts")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
          const randomLaunch = Math.floor(Math.random() * res.body.length)
          expect(res.body[randomLaunch].upcoming).to.be.a("boolean")
          expect(res.body[randomLaunch].upcoming).to.be.false
          // false as in it is not upcoming because it occurred already
        })
    })
    it("/api/launches/upcoming route fetches all upcoming SpaceX launches", () => {
      return supertest
        .get("/api/launches/upcoming")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
          const randomLaunch = Math.floor(Math.random() * res.body.length)
          expect(res.body[randomLaunch].upcoming).to.be.a("boolean")
          expect(res.body[randomLaunch].upcoming).to.be.true
          // true because it is an upcoming launch that did not happen yet
        })
    })
    it("/api/launches/:flightNumber fetches one specific launch based on the flight number", () => {
      const sampleData = {
        flight_number: 70,
        mission_name: "Es’hail 2",
        launch_year: "2018",
        launch_success: true
      }
      return supertest
        .get(`/api/launches/${sampleData.flight_number}`)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
          expect(res.body.flight_number).to.deep.equal(sampleData.flight_number)
          expect(res.body.mission_name).to.deep.equal(sampleData.mission_name)
          expect(res.body.launch_year).to.deep.equal(sampleData.launch_year)
          expect(res.body.launch_success).to.deep.equal(sampleData.launch_success)
        })
    })
  })
})

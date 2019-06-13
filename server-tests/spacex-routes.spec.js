//grabbing app so supertest can wrap around it
const supertest = require('supertest')(require('../server/app'))
const expect = require('chai').expect

//add more testing regarding 404 when we have error middleware setup
describe('Testing SpaceX requests', () => {
  describe('SpaceX launch routes', () => {
    it('/api/launches/past route fetches all past SpaceX launches', () => {
      return supertest
        .get('/api/launches/pasts')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => {
          const randomLaunch = Math.floor(Math.random() * res.body.length)
          expect(res.body[randomLaunch].upcoming).to.be.a('boolean')
          expect(res.body[randomLaunch].upcoming).to.be.false
          // false as in it is not upcoming because it occurred already
        })
    })
    it('/api/launches/upcoming route fetches all upcoming SpaceX launches', () => {
      return supertest
        .get('/api/launches/upcoming')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => {
          const randomLaunch = Math.floor(Math.random() * res.body.length)
          expect(res.body[randomLaunch].upcoming).to.be.a('boolean')
          expect(res.body[randomLaunch].upcoming).to.be.true
          // true because it is an upcoming launch that did not happen yet
        })
    })
    it('/api/launches/:flightNumber fetches one specific launch based on the flight number', () => {
      const sampleData = {
        flight_number: 70,
        mission_name: 'Es’hail 2',
        launch_year: '2018',
        launch_success: true
      }
      return supertest
        .get(`/api/launches/${sampleData.flight_number}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body.flight_number).to.equal(sampleData.flight_number)
          expect(res.body.mission_name).to.equal(sampleData.mission_name)
          expect(res.body.launch_year).to.equal(sampleData.launch_year)
          expect(res.body.launch_success).to.equal(sampleData.launch_success)
        })
    })
  })

  describe('SpaceX rocket routes', () => {
    it("/api/rockets/ route grabs all of SpaceX's rocket data", () => {
      return supertest
        .get('/api/rockets/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => {
          const [falcon1, falcon9, falconHeavy, bigFalconRocket] = res.body
          expect(res.body.length).to.equal(4)
          expect(falcon1.company).to.equal('SpaceX')
          expect(falcon1.rocket_id).to.equal('falcon1')
          expect(falcon9.rocket_id).to.equal('falcon9')
          expect(falconHeavy.rocket_id).to.equal('falconheavy')
          expect(bigFalconRocket.rocket_id).to.equal('bfr')
        })
    })
    it("/api/rockets/:rocketId route grabs a specific rocket's information", () => {
      return supertest
        .get(`/api/rockets/falcon1`)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => {
          const { first_flight, company, rocket_id, rocket_name, rocket_type } = res.body
          expect(first_flight).to.equal('2006-03-24')
          expect(company).to.equal('SpaceX')
          expect(rocket_id).to.equal('falcon1')
          expect(rocket_name).to.equal('Falcon 1')
          expect(rocket_type).to.equal('rocket')
        })
    })
  })

  describe('SpaceX roadster route', () => {
    //there's only been one roadster shot into space
    const roadsterName = "Elon Musk's Tesla Roadster"
    const roadsterDetails =
      "Elon Musk's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space."

    it('/api/roadster/ grabs the roadster in Spaces data', () => {
      return supertest
        .get('/api/roadster/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => {
          const { name, details } = res.body
          expect(name).to.equal(roadsterName)
          expect(details).to.equal(roadsterDetails)
        })
    })
  })
})

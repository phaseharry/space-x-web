//grabbing app so supertest can wrap around it
const supertest = require('supertest')(require('../server/app'))
const expect = require('chai').expect

describe('Testing routes that interact with Postgres', () => {
  describe('User auth related routes', () => {
    it('users can sign up and have their data in our database', () => {})
    it('users can login in', () => {})
    it('users can update their info', () => {})
  })
  describe("User can write post a comment on an specific launch, rocket, or the roadster's webpage", () => {
    it('users can write a post on a specific item (launch, rocket, or the roadster)', () => {})
    it('users can update their posts', () => {})
    it('users can delete their posts', () => {})
  })
})

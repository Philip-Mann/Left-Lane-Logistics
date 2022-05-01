'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Loads',
    [
        {
              "company": "CH Robinson",
              "origin": "Golden, CO",
              "destination": "San Antonio, TX",
              "equipment": "Van",
              "length": "53",
              "weight": "33000",
              "full_or_partial": "Full",
              "date_posted": "2022-04-24T21:46:20.974Z",
              "rate": 2597,
              "commodity": "General Freight",
              "comments": "Call DAT (800) 551-8847 for details",
              "factor": true,
              "ref_num": "217247",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              "company": "Landstar System",
              "origin": "Texarkana, AR",
              "destination": "Atlanta, GA",
              "equipment": "Van",
              "length": "53",
              "weight": "40000",
              "full_or_partial": "Full",
              "date_posted": "2022-04-24T22:13:36.512Z",
              "rate": 1505.96,
              "commodity": "Alchohol",
              "comments": "Must have empty weight before loading.  Loading is on a first come, first serve basis. Shipping hours are M-F 8am to 5pm.",
              "factor": true,
              "ref_num": "217248",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              "company": "Odyssey Logistics",
              "origin": "Texas City, TX",
              "destination": "Monaca, PA",
              "equipment": "Tanker",
              "length": "43",
              "weight": "45000",
              "full_or_partial": "Full",
              "date_posted": "2022-04-24T22:24:21.970Z",
              "rate": 5512.34,
              "commodity": "Hazardous Materials",
              "comments": "All drivers required to have a valid TWIC card when entering plant. Trailer must be dry and odor free.  Trailer must be a DOT-407 belly insulated, equipped with 3in male camlock fitting at discharge valve. Hoses to be provided by customer.",
              "factor": true,
              "ref_num": "217249",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              "company": "Coyote Logistics",
              "origin": "City of Industry, CA",
              "destination": "Richmond, VA",
              "equipment": "Reefer",
              "length": "53",
              "weight": "41,000",
              "full_or_partial": "Full",
              "date_posted": "2022-04-24T22:37:56.812Z",
              "rate": 5500,
              "commodity": "Produce",
              "comments": "Trailer must have proof of washout and and a tempature of -10° prior to entering facility. Call DAT (800) 551-8847 for details",
              "factor": false,
              "ref_num": "217250",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              "company": "Total Quality Logistics",
              "origin": "Aurora, IL",
              "destination": "Newberry, SC",
              "equipment": "Reefer",
              "length": "53",
              "weight": "35,000",
              "full_or_partial": "Full",
              "date_posted": "2022-04-24T22:42:42.937Z",
              "rate": 1750.38,
              "commodity": "Produce",
              "comments": "Drivers must slide tandems to rear prior to entering shipper.  Unloading hours are 24/7, fcfs.",
              "factor": true,
              "ref_num": "217251",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              "company": "Odyssey Logistics",
              "origin": "Channahon, IL",
              "destination": "La Porte, TX",
              "equipment": "Tanker",
              "length": "43",
              "weight": "35,000",
              "full_or_partial": "Full",
              "date_posted": "2022-04-24T23:02:06.185Z",
              "rate": 3432.66,
              "commodity": "Hazardous Materials",
              "comments": "All drivers required to have a valid TWIC card when entering plant. Trailer must be clean, dry, and odor free.  Trailer must be a DOT-407 rear insulated, equipped with 3in male camlock fitting at discharge valve. 40ft of hoses to be provided by driver.",
              "factor": true,
              "ref_num": "217252",
              createdAt: new Date(),
              updatedAt: new Date()
          },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

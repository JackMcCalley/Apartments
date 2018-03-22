require 'rails_helper'

RSpec.describe "ApartmentsTests", type: :request do

  it "gets a list of apartments" do
      # Create a new apartment in the Test Database (not the same one as development)
      Apartment.create(apt_number: 77, address: "1810 Coolcrest ave", city: "Upland", zip: 91784, state: "CA", country: "United States of America the greatest country ever", name: "Joe", phone: "9099217713", contact: "Before 9pm")

      # Make a request to the API
      get '/apartments'

      # Convert the response into a Ruby Hash
      json = JSON.parse(response.body)

      # Assure that we got a successful response
      expect(response).to be_success

      # Assure that we got one result back as expected
      expect(json.length).to eq 1
    end

    it "creates an apartment" do
      apartment_params = {
        apartment: {
          apt_number: 234,
          address: "1256 Redding way",
          city: "Upland",
          zip: 91786,
          state: "CA",
          country: "United States of America the greatest country er",
          name: "Bill",
          phone: "9099214040",
          contact: "Before 9pm"
        }
      }

      post '/apartments', params: apartment_params

      expect(response).to be_success

      new_apartment = Apartment.first

      expect(new_apartment.apt_number).to eq(234)
    end

    it "doesn't create an apt without apt number" do
      apartment_params = {
        apartment: {
          address: "1256 Redding way",
          city: "Upland",
          zip: 91786,
          state: "CA",
          country: "United States of America the greatest country er",
          name: "Bill",
          phone: "9099214040",
          contact: "Before 9pm"
        }
      }

      post '/apartments', params: apartment_params

      # This is a new test to make sure that our status is correct when the record can't be created
      # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      expect(response.status).to eq 422

      # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
      json = JSON.parse(response.body)
      # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
      expect(json['apt_number']).to include "can't be blank"
    end

    it "State can't be more than 2 letters" do
      apartment_params = {
        apartment: {
          address: "1256 Redding way",
          city: "Upland",
          zip: 91786,
          state: "California",
          country: "United States of America the greatest country er",
          name: "Bill",
          phone: "9099214040",
          contact: "Before 9pm"
        }
      }

      post '/apartments', params: apartment_params

      # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
      json = JSON.parse(response.body)
      # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
      expect(json['state']).to include "State must be abbreviated"
    end

    it "State can't be less than 2 letters" do
      apartment_params = {
        apartment: {
          address: "1256 Redding way",
          city: "Upland",
          zip: 91786,
          state: "California",
          country: "United States of America the greatest country er",
          name: "Bill",
          phone: "9099214040",
          contact: "Before 9pm"
        }
      }

      post '/apartments', params: apartment_params


      # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
      json = JSON.parse(response.body)
      # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
      expect(json['state']).to include "State must be abbreviated"
    end
end

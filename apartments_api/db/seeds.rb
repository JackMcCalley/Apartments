# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
apartment_attributes = [
  {
    id: 1,
    apt_number: 234,
    address: "1256 Redding way",
    city: "Upland",
    zip: 91786,
    state: "CA",
    country: "United States of America the greatest country er",
    name: "Bill",
    phone: "9099214040",
    contact: "Before 9pm"
  },
  {
    id: 2,
    apt_number: 77,
    address: "1810 Coolcrest ave",
    city: "Upland",
    zip: 91784,
    state: "CA",
    country: "United States of America the greatest country er",
    name: "Joe",
    phone: "9099217713",
    contact: "Before 9pm"
  }
]

apartment_attributes.each do |attributes|
  Apartment.create(attributes)
end

json.array! @apartments do |apartment|
  json.apt_number apartment.apt_number
  json.address apartment.address
  json.city apartment.city
  json.zip apartment.zip
  json.state apartment.state
  json.country apartment.country
  json.name apartment.name
  json.phone apartment.phone
  json.contact apartment.contact
  json.avatar asset_url(apartment.avatar.url(:med))
end

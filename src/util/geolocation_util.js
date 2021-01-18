import $ from 'jquery';

export const fetchLocation = (zipCode) => {
  return $.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyDYvOc7LNWIAuEr5AnVBEU2_YnoUehlnh4`
  })
};
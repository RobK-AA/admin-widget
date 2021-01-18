import $ from 'jquery';

export const fetchClients = () => {
  return $.ajax({
    url: `https://5fe220547a9487001768215e.mockapi.io/api/v1/organization`
  })
};

export const fetchClient = clientId => {
  return $.ajax({
    url: `https://5fe220547a9487001768215e.mockapi.io/api/v1/organization/${clientId}`
  })
};
import $ from 'jquery';

export const fetchMembers = () => {
  return $.ajax({
    url: `https://5fe220547a9487001768215e.mockapi.io/api/v1/members`
  })
};
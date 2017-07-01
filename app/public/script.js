$(document).ready(function() {
  $.ajax({
    url: 'https://api.github.com/users/repos',
    type: 'POST',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      // Authorization: 'bearer 93a2fab04d92377cd40ff3a64a0e97d6ac53eacd'
    },
    data: {
      name: 'Hello-test-create',
      description: 'This is your first repository',
      homepage: 'https://github.com',
      private: false,
      has_issues: true,
      has_projects: true,
      has_wiki: true,
    },
    success(res) {
      console.log(res);
    },
    error(err) {
      console.log(err);
    },
  });
});

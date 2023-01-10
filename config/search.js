const search = {
  resultFields: ['meta_description', 'date', 'url', 'title', 'id'],
  facets: [{ field: 'url_path_dir1', label: 'Team' }],
  titleField: 'title',
  urlField: 'url',
}

module.exports = { search }

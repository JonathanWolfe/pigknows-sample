import PropTypes from 'prop-types';

/**
 * @typedef User
 * @property {string} gender
 * @property {string} email
 * @property {string} phone,
 * @property {string} cell,
 * @property {string} nat
 *
 * @property {Object} name
 * @property {string} name.title
 * @property {string} name.first
 * @property {string} name.last
 *
 * @property {Object} location
 * @property {stirng} location.street
 * @property {stirng} location.city
 * @property {stirng} location.state
 * @property {stirng} location.postcode
 *
 * @property {Object} location.coordinates
 * @property {string} location.coordinates.latitude
 * @property {string} location.coordinates.longitude
 *
 * @property {Object} location.timezone
 * @property {string} location.timezone.offset
 * @property {string} location.timezone.description
 *
 * @property {Object} login
 * @property {string} login.uuid,
 * @property {string} login.username,
 * @property {string} login.password,
 * @property {string} login.salt,
 * @property {string} login.md5,
 * @property {string} login.sha1,
 * @property {string} login.sha256,
 *
 * @property {Object} dob
 * @property {string} dob.date,
 * @property {number} dob.age,
 *
 * @property {Object} registered
 * @property {string} registered.date,
 * @property {number} registered.age,
 *
 * @property {Object} id
 * @property {string} id.name,
 * @property {string} id.value,
 *
 * @property {Object} picture
 * @property {string} picture.large,
 * @property {string} picture.medium,
 * @property {string} picture.thumbnail,
 */

export default PropTypes.shape({
  gender: PropTypes.string,
  name: {
    title: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
  },
  location: {
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postcode: PropTypes.string,
    coordinates: {
      latitude: PropTypes.string,
      longitude: PropTypes.string,
    },
    timezone: {
      offset: PropTypes.string,
      description: PropTypes.string,
    },
  },
  email: PropTypes.string,
  login: {
    uuid: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    salt: PropTypes.string,
    md5: PropTypes.string,
    sha1: PropTypes.string,
    sha256: PropTypes.string,
  },
  dob: {
    date: PropTypes.string,
    age: PropTypes.number,
  },
  registered: {
    date: PropTypes.string,
    age: PropTypes.number,
  },
  phone: PropTypes.string,
  cell: PropTypes.string,
  id: {
    name: PropTypes.string,
    value: PropTypes.string,
  },
  picture: {
    large: PropTypes.string,
    medium: PropTypes.string,
    thumbnail: PropTypes.string,
  },
  nat: PropTypes.string,
});

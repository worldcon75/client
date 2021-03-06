import { PropTypes } from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

export const lookupQuery = ImmutablePropTypes.mapContains({
  email: PropTypes.string,
  member_number: PropTypes.number,
  name: PropTypes.string
})

export const lookupResults = ImmutablePropTypes.mapContains({
  status: PropTypes.oneOf(['multiple', 'not found', 'success']).isRequired,
  id: PropTypes.number,
  membership: PropTypes.string,
  name: PropTypes.string
})

export const lookup = ImmutablePropTypes.mapOf(lookupResults, lookupQuery)

export const paperPubs = ImmutablePropTypes.mapContains({
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
})

export const person = ImmutablePropTypes.mapContains({
  id: PropTypes.number.isRequired,
  last_modified: PropTypes.string.isRequired,
  membership: PropTypes.string.isRequired,
  member_number: PropTypes.number,
  legal_name: PropTypes.string.isRequired,
  public_first_name: PropTypes.string,
  public_last_name: PropTypes.string,
  email: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
  paper_pubs: paperPubs
})

export const people = ImmutablePropTypes.listOf(person)

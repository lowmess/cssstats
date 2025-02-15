import styled from '@emotion/styled'
import {
  space,
  fontSize,
  width,
  color,
  fontWeight
} from 'styled-system'

const Button = styled('button')(
  [],
  _ => ({
    display: 'inline-block',
    fontFamily: 'inherit',
    borderWidth: 0,
    borderRadius: '4px',
    appearance: 'none'
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Button.defaultProps = {
  fontSize: 1,
  fontWeight: 600,
  color: 'white',
  bg: 'blue',
  py: 3,
  px: 4
}

export default Button

import React from "react"
import styled from "styled-components"
import { Button } from "@trig-app/core-components"

const Container = styled.div`
  background: black;
  color: white;
`

const Index = () => {
  return (
    <Container>
      Hello world friends!
      <Button>Hello Test</Button>
    </Container>
  )
}

export default Index

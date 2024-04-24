import styled from 'styled-components';

type GridWrapperPropsStyle = {
  columns: string
  rows: string
  columnGap: string
  rowGap: string
}

export const GridWrapper = styled.div<GridWrapperPropsStyle>`
  display: grid;
  grid-template-columns:${props => props.columns};
  grid-template-rows: ${props => props.rows};
  column-gap: ${props => props.columnGap};
  row-gap: ${props => props.rowGap};
`

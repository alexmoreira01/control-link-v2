import { PaginationContainer, ButtonPagination } from "./styles";

interface paginationProps {
  pages: number;
  currentPage: number;
  setCurrentPage: (index: number) => void
}

export function Pagination({pages, currentPage, setCurrentPage }:paginationProps) {
  return (
    <PaginationContainer>
      {Array.from(Array(pages), (item, index) => {
        return (
          <ButtonPagination
            key={index}
            className={`${index === currentPage ? "buttonActive" : ""}`}
            value={index}
            onClick={() => { setCurrentPage(index) }} >{index + 1}
          </ButtonPagination>
        )
      })}
    </PaginationContainer>
  )
}
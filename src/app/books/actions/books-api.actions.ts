import { createAction, props } from "@ngrx/store";
import { BookModel } from "src/app/shared/models";

export const booksLoaded = createAction(
  "[Books API] Books Loaded Successfully",
  props<{ books: BookModel[] }>()
);

// export const booksLoadedFailure = createAction(
//     '[Books API] Books Loaded Failure',
//     props<{ books: BookModel[]}>()
// )

export const bookCreated = createAction(
  "[Books API] Book Created Success",
  props<{ book: BookModel }>()
);

export const booksUpdated = createAction(
  "[Books API] Book Updated Successfully",
  props<{ book: BookModel }>()
);

export const bookDeleted = createAction(
  "[Books API] Book Deleted Success",
  props<{ bookId: string }>()
);

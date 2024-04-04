import { useRouter } from "next/router";
import React, { useMemo, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Book from "~components/book";
import { useToast } from "~components/ui/use-toast";
import usePostOrder from "~src/hooks/mutations/use-post-order";
import useGetBooks from "~src/hooks/queries/use-get-books";
import useGetProfile from "~src/hooks/use-get-profile";

const ListBooks = () => {
  const router = useRouter();
  const querySearch = router.query?.search as string;

  const postOrder = usePostOrder();
  const { data: profile, refetch: refetchProfile } = useGetProfile();
  const { toast } = useToast();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetBooks({ keyword: querySearch || "" });

  const allBooks = useMemo(() => {
    return data?.pages?.flatMap((page) => page.data);
  }, [data?.pages]);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!isLoading) {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  }, [hasNextPage, inView, isFetchingNextPage, isLoading, fetchNextPage]);

  const handleClickOrder = (bookId: number) => {
    return postOrder
      .mutateAsync({ userId: profile.id, bookId: bookId })
      .then(() => {
        refetchProfile();
        return toast({
          variant: "default",
          title: "Successfully to order!",
        });
      });
  };
  return (
    <div className="container p-4 min-h-[600px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {isLoading && "Loading..."}
        {!isLoading &&
          allBooks?.map((book, idx) => (
            <Book
              key={idx}
              title={book?.title}
              writer={book?.writer}
              image={book?.coverImage}
              price={book?.point}
              tags={book?.tag}
              onClick={() => handleClickOrder(book.id)}
            />
          ))}

        {hasNextPage && !isLoading && (
          <div className="px-4 mt-3" ref={ref}>
            Load More...
          </div>
        )}
      </div>
    </div>
  );
};

export default ListBooks;

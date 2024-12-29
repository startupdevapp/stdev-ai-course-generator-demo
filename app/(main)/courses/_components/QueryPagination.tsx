'use client';

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useSearchParams } from 'next/navigation';

interface QueryPaginationProps {
	totalPages: number;
	className?: string;
}

const QueryPagination = ({ totalPages, className }: QueryPaginationProps) => {
	const pathname = usePathname();

	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get('page')) || 1;

	const prevPage = currentPage - 1;
	const nextPage = currentPage + 1;

	const createPageUrl = (page: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', page.toString());
		return `${pathname}?${params.toString()}`;
	};

	return (
		<Pagination className={className}>
			<PaginationContent>
				{prevPage >= 1 ? (
					<PaginationItem>
						<PaginationPrevious href={createPageUrl(prevPage)} />
					</PaginationItem>
				) : null}

				{Array(totalPages)
					.fill('')
					.map((_, index) => (
						<PaginationItem key={index} className="hidden sm:inline-block">
							<PaginationLink
								isActive={currentPage === index + 1}
								href={createPageUrl(index + 1)}
							>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}

				{nextPage <= totalPages ? (
					<PaginationItem>
						<PaginationNext href={createPageUrl(nextPage)} />
					</PaginationItem>
				) : null}
			</PaginationContent>
		</Pagination>
	);
};

export default QueryPagination;

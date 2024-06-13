import Link from 'next/link';

const SearchResults = ({ results }) => {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-md shadow-md z-10 max-h-64 overflow-y-auto">
      {results.length > 0 ? (
        results.map(product => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="p-4 hover:bg-gray-100 cursor-pointer">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className="p-4 text-center text-gray-600">No results found</div>
      )}
    </div>
  );
};

export default SearchResults;

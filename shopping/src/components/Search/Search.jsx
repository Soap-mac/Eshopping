import React, { useState, useEffect, useMemo, useRef } from 'react';
import './searchStyle.css';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineSearchOff } from 'react-icons/md';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const navigate = useNavigate();
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const searchProducts = useMemo(
    () =>
      debounce(async (value) => {
        if (value.trim().length < 2) {
          setProducts([]);
          setLoading(false);
          setHasSearched(false);
          return;
        }
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/searchProducts?q=${value}`
          );
          const result = await response.json();
          setProducts(result.products || []);
        } catch (error) {
          console.log(error);
          setProducts([]);
        } finally {
          setLoading(false);
          setHasSearched(true);
        }
      }, 500),
    []
  );

  useEffect(() => {
    return () => {
      searchProducts.cancel();
    };
  }, [searchProducts]);

  // Close the results panel on an outside click, without wiping what was typed
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setProducts([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim().length === 0) {
      setProducts([]);
      setLoading(false);
      setHasSearched(false);
      return;
    }

    if (value.trim().length >= 2) {
      setLoading(true);
    }

    searchProducts(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSearch('');
      setProducts([]);
      setHasSearched(false);
      inputRef.current?.blur();
    }
  };

  const handleProductClick = (id) => {
    navigate(`/Productdetail/${id}`);
    setProducts([]);
    setSearch('');
    setHasSearched(false);
  };

  const showPanel = search.trim().length >= 2;

  return (
    <div ref={containerRef} className="searchBox relative w-full">
      {/* Input bar */}
      <div
        className="
          flex items-center h-[46px] w-full rounded-full
          bg-neutral-900 border border-white/15
          !pl-4 !pr-1.5
          transition-colors duration-150
          hover:border-white/25
          focus-within:border-amber-500/60 focus-within:bg-neutral-800
          focus-within:ring-2 focus-within:ring-amber-500/25
        "
      >
        <FaSearch className="flex-shrink-0 text-neutral-400" size={14} />

        <input
          ref={inputRef}
          type="text"
          placeholder="Search here"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          className="
            w-full h-full bg-transparent
            !pl-3 !pr-2
            text-[14px] !text-amber-50 placeholder:!text-neutral-400
            focus:outline-none
          "
        />

        <button
          type="button"
          onClick={() => inputRef.current?.focus()}
          aria-label="Search"
          className="
            flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full
            text-amber-400 bg-amber-500/10
            transition-colors hover:bg-amber-500/20
          "
        >
          <FaSearch size={13} />
        </button>
      </div>

      {/* Results panel */}
      {showPanel && (
        <div
          className="
            absolute top-[54px] left-0 w-full max-h-[420px] overflow-y-auto
            bg-neutral-950 border border-white/10 rounded-xl
            shadow-2xl shadow-black/50
            z-500
          "
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2.5 !py-8 text-neutral-500">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-700 border-t-amber-500" />
              <span className="text-[13px]">Searching…</span>
            </div>
          ) : products.length > 0 ? (
            <ul>
              {products.map((product) => (
                <li
                  key={product._id}
                  onClick={() => handleProductClick(product._id)}
                  className="
                    flex items-center gap-3.5 !p-3
                    border-b border-white/5 last:border-b-0
                    cursor-pointer transition-colors hover:bg-white/5
                  "
                >
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-white/5 bg-neutral-900">
                    <img
                      src={product.images?.[0]}
                      alt={product.name || 'Product'}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium text-amber-50">
                      {product.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-wide text-neutral-500">
                      {product.brand}
                    </p>
                  </div>

                  <span className="tabular-nums text-[13.5px] font-semibold text-orange-400">
                    ₹{product.price}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            hasSearched && (
              <div className="flex flex-col items-center justify-center !py-8 text-center !px-6">
                <span className="!mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                  <MdOutlineSearchOff size={20} />
                </span>
                <p className="text-[13px] text-neutral-400">
                  No results for <span className="font-medium text-amber-50">"{search}"</span>
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
import { useState, useMemo, useEffect } from 'react';
import { Label } from '../../ui/label';
import { Input, InputGroup } from '../../ui/input';
import { InputShortText } from './short';
import { cn } from '../../../lib/utils';

interface DropdownProps {
  disabled?: boolean;
  loading?: boolean;
  useBottomSheet?: boolean;
  showMenu?: boolean;
  error?: string;
  label?: string;
  items?: Array<{ [key: string]: any }>;
  itemValue?: string;
  itemText?: string;
  modelValue?: any;
  placeholder?: string;
  className?: string;
  errorFetch?: string;
  executeFetch?: () => void;
  onChange?: (value: any) => void;
  onBlur?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  disabled = false,
  loading = false,
  error = '',
  label = '',
  items = [],
  itemValue = 'value',
  itemText = 'text',
  modelValue = '',
  placeholder = '',
  className = '',
  errorFetch = '',
  executeFetch,
  onChange,
  onBlur,
}) => {
  const [search, setSearch] = useState('');
  const [shown, setShown] = useState(false);
  const [shownOffcanvas, setShownOffcanvas] = useState(false);

  const filteredItems = useMemo(() => {
    return search
      ? items.filter((i) =>
          i[itemText].toLowerCase().includes(search.toLowerCase())
        )
      : items;
  }, [search, items, itemText]);

  const selectedText = useMemo(() => {
    if (modelValue && items.length > 0) {
      const findItem = items.find((v) => v[itemValue] === modelValue);
      return findItem ? findItem[itemText] : '';
    }
    return '';
  }, [modelValue, items, itemValue, itemText]);

  const handleOptionClick = (option: any) => {
    if (onChange) {
      onChange(option[itemValue]);
    }
    setSearch('');
    setShown(false);
  };

  useEffect(() => {
    if (shown || shownOffcanvas) {
      // Disable scroll on body when dropdown or overlay is shown
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll on body when dropdown or overlay is hidden
      document.body.style.overflow = '';
    }

    return () => {
      // Cleanup: Ensure body scroll is reset when component is unmounted
      document.body.style.overflow = '';
    };
  }, [shown, shownOffcanvas]);

  function setInputValue3(value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={`input-dropdown group-input ${className}`}>
      <div className="relative">
        <InputGroup>
          <Label>{label}</Label>
          <InputShortText
            className="mt-0"
            iconright={true}
            readOnly
            setEnteredText={setInputValue3}
            onClick={() => setShown(!shown)}
            placeholder={`Pilih ${label.toLowerCase()}`}
            type="text"
            value={selectedText}
          >
            <div
              className={`transform transition-transform ${
                shown ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.12253 9.2925L12.0025 13.1725L15.8825 9.2925C16.2725 8.9025 16.9025 8.9025 17.2925 9.2925C17.6825 9.6825 17.6825 10.3125 17.2925 10.7025L12.7025 15.2925C12.3125 15.6825 11.6825 15.6825 11.2925 15.2925L6.70253 10.7025C6.31253 10.3125 6.31253 9.6825 6.70253 9.2925C7.09253 8.9125 7.73253 8.9025 8.12253 9.2925Z"
                  fill="#58585B"
                />
              </svg>
            </div>
          </InputShortText>
        </InputGroup>

        {/* Overlay */}
        {shown && (
          <div
            className="overlay fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden"
            onClick={() => setShown(false)}
          ></div>
        )}

        {/* Dropdown content */}
        <div
          className={`dropdown-content absolute left-0 right-0 transition-all duration-300 ease-in-out ${
            shown ? 'max-h-96 opacity-100 z-20' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="bottomsheet-dropdown">
            <Label>Pilih {label.toLowerCase()}</Label>
            <svg
              onClick={() => setShown(false)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="filled=false">
                <path
                  id="Combined Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                  fill="#58585B"
                />
              </g>
            </svg>
          </div>
          {items.length > 10 && (
            <Input
              variant="hover-focus"
              inputSize="lg"
              type="text"
              placeholder={`Cari ${label.toLowerCase()}`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
          <ul className="list-none max-h-96 sm:max-h-48 overflow-y-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((option) => (
                <li
                  key={option[itemValue]}
                  onClick={() => handleOptionClick(option)}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <div className="flex justify-between">
                    {option[itemText]}
                    {modelValue === option[itemValue] && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="icon system/C/Check">
                          <path
                            id="Solid"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.4219 5.61269L20.2831 5.477C19.519 4.7986 18.3925 4.84383 17.6767 5.61269L9.65023 14.2353L6.32326 10.6612C5.56281 9.84431 4.33855 9.84431 3.57811 10.6612C2.8073 11.4893 2.8073 12.8393 3.57811 13.6674L7.75548 18.155C8.80431 19.2817 10.4961 19.2817 11.5449 18.155L20.4219 8.85783C21.1286 8.10774 21.166 6.97978 20.4219 5.61269Z"
                            fill="#3CBF31"
                          />
                        </g>
                      </svg>
                    )}
                  </div>
                </li>
              ))
            ) : (
              search !== '' && (
                <div className="p-4 text-error">
                  <Label>Data Tidak Ditemukan</Label>
                  <p>Informasi yang kamu cari tidak ditemukan silakan masukan kata kunci lain.</p>
                </div>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export {Dropdown};
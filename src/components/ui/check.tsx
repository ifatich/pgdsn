import React from 'react';
import { cn } from '../../lib/utils';

interface CheckProps {
    id: string;
    name: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

const Check: React.FC<CheckProps> = ({
    id,
    name,
    checked = false,
    onChange,
    disabled = false,
    className = '',
}) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) { 
            onChange(event.target.checked); 
        }
    };

    return (
        <div className={cn('relative flex gap-x-3', className)}>
            <div className="flex h-6 items-center justify-center">
                <input 
                    id={id} 
                    name={name} 
                    type="checkbox" 
                    className={`peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-md border border-slate-300
                        ${checked ? 'z-10 border-lime-50' : 'bg-white'} 
                        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-lime-50'}
                    `}
                    checked={checked}
                    onChange={handleCheckboxChange} 
                    disabled={disabled} 
                />
                {checked && (
                    <svg className='absolute bg-lime-50 rounded' width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M17.0182 4.67708L16.9026 4.56401C16.2659 3.99867 15.327 4.03636 14.7306 4.67708L8.04186 11.8626L5.26938 8.88419C4.63568 8.20343 3.61546 8.20343 2.98176 8.88419C2.33941 9.57424 2.33941 10.6993 2.98176 11.3893L6.4629 15.129C7.33693 16.0679 8.74679 16.0679 9.62081 15.129L17.0182 7.18219C17.6204 6.53528 17.6581 5.50605 17.1312 4.81134L17.0182 4.67708Z"
                            fill="white" />
                    </svg>
                )}
            </div>
        </div>
    );
};

export { Check };
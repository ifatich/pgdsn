import React from 'react';
import { cn } from '../../lib/utils';

interface RadioProps {
    id: string;
    name: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

const Radio: React.FC<RadioProps> = ({
    id,
    name,
    checked = false,
    onChange,
    disabled = false,
    className = '',
}) => {
    const handleRadioboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    type="radio" 
                    className={`peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full border border-slate-300
                        ${checked ? 'z-10 border-lime-50' : 'bg-white'} 
                        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-lime-50'}
                    `}
                    checked={checked}
                    onChange={handleRadioboxChange} 
                    disabled={disabled} 
                />
                {checked && (
                    <svg className='absolute rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM12 17C14.7614 17 17 14.7615 17 12C17 9.23853 14.7614 7 12 7C9.23859 7 7 9.23853 7 12C7 14.7615 9.23859 17 12 17Z" fill="#009E3D"/>
                    </svg>
                )}
            </div>
        </div>
    );
};

export { Radio };
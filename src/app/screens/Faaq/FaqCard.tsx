import React, { FC } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FaqCardProps {
  open: boolean;
  toggle: () => void;
  title: string;
  subtitle: string;
  desc: string;
}

const FaqCard: FC<FaqCardProps> = ({ open, toggle, title, subtitle, desc }) => {
  return (
    <div className="flex items-start">
   <div className={`shadow-xl rounded border border-t-0 ${open ? 'border-blue-500' : ''} mt-5`}>
        <div className="p-4 text-xl relative font-medium">
          <div className="w-full pr-8 text-2xl text-[800] text-black" onClick={toggle}>
            {title}
          </div>
          <div className="text-gray-500 flex items-start justify-start text-sm  mt-2">{subtitle}</div>
          <button
            aria-label="question-expanded"
            className="text-xl ml-8 absolute top-0 right-0 p-4 focus:outline-none"
            onClick={toggle}
          >
            {open ? (
              <FontAwesomeIcon icon={faChevronUp} className="w-5 " />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} className="" />
            )}
          </button>
        </div>
        <Collapse isOpened={open}>
            <div className=" p-5">{desc}</div>
        </Collapse>
      </div>
    </div>
  );
};

export default FaqCard;

import React from 'react';
import { Link } from 'gatsby';

const DropDownLink = ({
  menuTitle,
  defaultURL,
  links,
  disableDropdown,
}) => {

  if (disableDropdown) return (
      <div className={"relative inline mt-3 pb-1 group"}>
        <Link to={defaultURL} className="nav-item"> 
          {menuTitle}
        </Link>

        { links &&
          <ul className="hidden px-4 py-2 top-6 -left-[40%] z-10 group-hover:absolute group-hover:block highlight-border bg-light/90 list-none">
            { links.map((link, i) => {
              return <li key={i} class="p-2">
                <Link 
                  className="nav-link" 
                  to={link.url}
                >
                  {link.name}
                </Link>
              </li>
            })}
          </ul>
        }
      </div>
    )

  return (
    links.map((link, i) => {
      return <Link key={i}
        className="nav-link"      
        to={link.url}
      >
        {link.longName ? link.longName : link.name }
      </Link>
    })
  )
}

export default DropDownLink;

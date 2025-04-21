import React from "react";
import Link from "next/link";

const MobileNavigation = () => {
  const categories = ["Mens", "Womens", "Jewelry", "Perfume"];
  const socials = ["facebook", "twitter", "instagram", "linkedin"];
  const settings = ["Language", "Currency"];

  return (
    <>
      <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn>
          <i className="icon-menu-outline"></i>
        </button>

        <button className="action-btn">
          <i className="icon-bag-handle-outline"></i>
          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <i className="icon-home-outline"></i>
        </button>

        <button className="action-btn">
          <i className="icon-heart-outline"></i>
          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          <i className="icon-grid-outline"></i>
        </button>
      </div>

      <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <i className="icon-close-outline"></i>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <Link href="/" className="menu-title">
              Home
            </Link>
          </li>

          {categories.map((category, index) => (
            <li className="menu-category" key={index}>
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">{category}</p>
                <div>
                  <i className="icon-add-outline add-icon"></i>
                  <i className="icon-remove-outline remove-icon"></i>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                {["Item 1", "Item 2", "Item 3", "Item 4"].map((item, i) => (
                  <li className="submenu-category" key={i}>
                    <Link href={`/${category.toLowerCase()}/${item.toLowerCase().replace(" ", "-")}`} className="submenu-title">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="menu-category">
            <Link href="/blog" className="menu-title">
              Blog
            </Link>
          </li>
          <li className="menu-category">
            <Link href="/hot-offers" className="menu-title">
              Hot Offers
            </Link>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            {settings.map((setting, index) => (
              <li className="menu-category" key={index}>
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">{setting}</p>
                  <i className="icon-caret-back-outline caret-back"></i>
                </button>
                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <Link href={`/${setting.toLowerCase()}/option-1`} className="submenu-title">
                      Option 1
                    </Link>
                  </li>
                  <li className="submenu-category">
                    <Link href={`/${setting.toLowerCase()}/option-2`} className="submenu-title">
                      Option 2
                    </Link>
                  </li>
                </ul>
              </li>
            ))}
          </ul>

          <ul className="menu-social-container">
            {socials.map((social, index) => (
              <li key={index}>
                <Link href={`https://${social}.com`} className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className={`icon-logo-${social}`}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;

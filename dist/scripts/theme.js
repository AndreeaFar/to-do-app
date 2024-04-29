const themeIconEl = document.getElementById('theme');

function setDarkTheme() {
  document.documentElement.style.setProperty(
    '--mainBgColor',
    'var(--mainBgColor-dark)'
  );
  document.documentElement.style.setProperty(
    '--mainTextColor',
    'var(--mainTextColor-dark)'
  );
  document.documentElement.style.setProperty(
    '--mainSectionBg',
    'var(--mainSectionBg-dark)'
  );
  document.documentElement.style.setProperty(
    '--mainHeaderImageUrl',
    'var(--mainHeaderImageUrl-dark)'
  );
  document.documentElement.style.setProperty(
    '--mainHeaderMobileImageUrl',
    'var(--mainHeaderMobileImageUrl-dark)'
  );
}

function setLightTheme() {
  document.documentElement.style.setProperty(
    '--mainBgColor',
    'var(--mainBgColor-light)'
  );
  document.documentElement.style.setProperty(
    '--mainTextColor',
    'var(--mainTextColor-light)'
  );
  document.documentElement.style.setProperty(
    '--mainSectionBg',
    'var(--mainSectionBg-light)'
  );
  document.documentElement.style.setProperty(
    '--mainHeaderImageUrl',
    'var(--mainHeaderImageUrl-light)'
  );
  document.documentElement.style.setProperty(
    '--mainHeaderMobileImageUrl',
    'var(--mainHeaderMobileImageUrl-light)'
  );
}

function switchTheme() {
  const currentSrc = themeIconEl.src;
  if (currentSrc.includes('icon-sun.svg')) {
    themeIconEl.src = '../assets/images/icon-moon.svg';
    setLightTheme();
  } else {
    themeIconEl.src = '../assets/images/icon-sun.svg';
    setDarkTheme();
  }
}

// Handle the application theme switch
themeIconEl.addEventListener('click', switchTheme);

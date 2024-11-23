const Header = () => {
    return (
        <header className="header">
            <div className="header__icon">
               <div className="header__icon_logo">
                <svg width="212" height="60" viewBox="0 0 209 48" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Protocol Labs Directory Beta Black Logo</title><path fillRule="evenodd" clipRule="evenodd" d="M21.8668 30.6735L15.2856 26.8894C15.107 26.7615 14.8774 26.8894 14.8774 27.1195V34.6877C14.8774 34.8923 14.9794 35.0712 15.158 35.1735L21.7393 38.9576C21.9178 39.0599 22.1474 38.9321 22.1474 38.7275V31.1593C22.1474 30.9547 22.0454 30.7758 21.8668 30.6735ZM22.1729 21.0854L22.1474 28.7559C22.1474 28.9348 21.9688 28.986 21.8413 28.9349L13.806 24.3326C13.6275 24.2303 13.3979 24.3581 13.3979 24.5627V33.6394C13.3979 33.844 13.1428 33.9974 12.9898 33.8695L6.40853 30.1366C6.22997 30.0343 6.12793 29.8553 6.12793 29.6508V12.0342C6.12793 11.8297 6.38302 11.6762 6.53607 11.8041L21.8668 20.5485C22.0454 20.7019 22.1729 20.8808 22.1729 21.0854ZM39.1107 11.9575L32.606 15.6649C32.4274 15.7672 32.3254 15.9462 32.2999 16.1507L32.3254 25.5343C32.3254 25.7388 32.2233 25.9178 32.0448 26.0201L23.9075 30.6991C23.7289 30.8013 23.6269 30.9803 23.6269 31.1849V38.7275C23.6269 38.9321 23.8565 39.0855 24.035 38.9576L39.2382 30.2644C39.4168 30.1621 39.5188 29.9831 39.5188 29.7786V12.2132C39.5188 11.9831 39.2892 11.8552 39.1107 11.9575ZM23.6269 21.111V28.6536C23.6269 28.8582 23.8565 29.0116 24.035 28.8837L30.6928 25.074C30.7693 25.0485 30.8204 24.9462 30.8204 24.8439V17.1734C30.8204 16.9689 30.5908 16.8155 30.4122 16.9433L23.9075 20.6507C23.7289 20.7274 23.6269 20.9064 23.6269 21.111ZM7.37786 9.93761L13.8571 6.20463C14.0356 6.12793 14.2397 6.12793 14.4438 6.20463L29.7745 14.949C29.9531 15.0513 29.9531 15.3325 29.7745 15.4348L23.2698 19.1678C23.0912 19.27 22.8871 19.27 22.7086 19.1678L7.37786 10.4234C7.2248 10.3211 7.2248 10.0399 7.37786 9.93761ZM24.7748 9.93761L31.3305 6.20463C31.5091 6.10236 31.7132 6.10236 31.8917 6.20463L38.4985 9.98875C38.677 10.091 38.677 10.3723 38.4985 10.4745L31.9427 14.2075C31.7642 14.3098 31.5601 14.3098 31.3815 14.2075L24.7748 10.4234C24.5962 10.3211 24.5962 10.0399 24.7748 9.93761ZM55.9969 13.2107H58.0631C59.6192 13.2107 60.8436 12.8272 60.8436 11.1397C60.8436 9.04307 59.262 8.86408 57.8846 8.86408H55.9969V13.2107ZM63.42 11.1141C63.42 14.3613 60.8181 15.1539 57.9101 15.1539H55.9969V19.6283H53.4971V6.9209H57.8335C60.4354 6.9209 63.42 7.27885 63.42 11.1141ZM66.6606 14.6678C66.6606 12.9036 67.4259 12.4689 68.6248 12.4689C68.8067 12.4689 68.9753 12.4756 69.1408 12.4821C69.3003 12.4883 69.4569 12.4945 69.6196 12.4945V10.2189C69.5269 10.2189 69.4273 10.212 69.3316 10.2054C69.2429 10.1993 69.1575 10.1934 69.084 10.1934C68.0126 10.1934 67.1453 10.6792 66.6096 11.8297V10.1934H64.2373V19.6025H66.6606V14.6678ZM74.7974 17.9662C76.1238 17.9662 77.0676 16.8923 77.0676 14.9236C77.0676 12.9548 76.1238 11.8809 74.7974 11.8809C73.4709 11.8809 72.5271 12.9548 72.5271 14.9236C72.5016 16.8923 73.4454 17.9662 74.7974 17.9662ZM74.7974 9.98888C77.1697 9.98888 79.5165 11.6253 79.5165 14.9236C79.5165 18.2474 77.1697 19.8582 74.7974 19.8582C72.425 19.8582 70.0782 18.2474 70.0782 14.9236C70.0527 11.5997 72.3995 9.98888 74.7974 9.98888ZM83.6227 10.1935V7.63672H81.2249V10.1935H79.8984V11.8811H81.2249V17.097C81.2249 18.9635 81.6585 19.6283 83.8013 19.6283H85.5614V17.8896H84.8216C83.9543 17.8896 83.6227 17.7106 83.6227 16.739V11.8555H85.5869V10.1935H83.6227ZM91.0465 17.9662C92.3729 17.9662 93.3168 16.8923 93.3168 14.9236C93.3168 12.9548 92.3729 11.8809 91.0465 11.8809C89.72 11.8809 88.7762 12.9548 88.7762 14.9236C88.7762 16.8923 89.72 17.9662 91.0465 17.9662ZM91.0465 9.98888C93.4188 9.98888 95.7656 11.6253 95.7656 14.9236C95.7656 18.2474 93.4188 19.8582 91.0465 19.8582C88.6742 19.8582 86.3274 18.2474 86.3274 14.9236C86.3274 11.5997 88.6742 9.98888 91.0465 9.98888ZM101.377 11.8554C102.296 11.8554 103.163 12.5201 103.342 13.415H105.663C105.357 11.0883 103.367 9.98888 101.403 9.98888C98.597 9.98888 96.6838 12.0855 96.6838 14.9236C96.6838 17.7616 98.4949 19.8582 101.301 19.8582C103.24 19.8582 105.204 19.0145 105.765 16.4321H103.444C103.112 17.5827 102.219 17.9918 101.403 17.9918C100.076 17.9918 99.1326 16.8668 99.1326 14.898C99.1326 12.9292 100.127 11.8554 101.377 11.8554ZM111.173 17.9661C112.5 17.9661 113.443 16.8922 113.443 14.9234C113.443 12.9547 112.5 11.8808 111.173 11.8808C109.847 11.8808 108.903 12.9547 108.903 14.9234C108.903 16.8922 109.847 17.9661 111.173 17.9661ZM111.173 9.98877C113.546 9.98877 115.892 11.6251 115.892 14.9234C115.892 18.2473 113.546 19.8581 111.173 19.8581C108.801 19.8581 106.454 18.2473 106.454 14.9234C106.454 11.5996 108.801 9.98877 111.173 9.98877ZM117.27 6.9209V19.6283H119.693V6.9209H117.27ZM134.182 17.5828V19.6283H125.509V6.92081H128.008V17.5828H134.182ZM138.926 18.2219C137.829 18.2219 137.294 17.6594 137.294 16.9691C137.294 15.8952 138.365 15.5884 141.069 15.3071V16.023C141.069 17.4037 140.431 18.2219 138.926 18.2219ZM140.993 13.7474C137.294 14.1821 134.794 14.8469 134.794 17.0713C134.794 18.81 136.401 19.8583 138.212 19.8583C139.641 19.8583 140.635 19.4236 141.299 18.452C141.324 18.9122 141.375 19.3213 141.452 19.6282H143.671C143.492 18.8355 143.39 17.9918 143.39 16.5088C143.39 15.9635 143.4 15.2773 143.408 14.7658V14.7653V14.7646C143.412 14.4613 143.416 14.2196 143.416 14.1054C143.416 10.9094 141.605 9.93777 139.36 9.93777C136.937 9.93777 135.406 11.2929 135.228 13.1594H137.472C137.523 12.1111 138.314 11.6253 139.232 11.6253C140.202 11.6253 140.993 12.1366 140.993 13.594V13.7474ZM149.768 11.83C148.442 11.83 147.574 13.0061 147.574 14.8982C147.574 16.7903 148.442 17.992 149.768 17.992C151.018 17.992 151.911 16.7647 151.911 14.9238C151.936 13.0829 151.018 11.83 149.768 11.83ZM145.253 6.9209H147.676V11.4209C148.186 10.5516 149.207 9.98909 150.38 9.98909C152.65 9.98909 154.462 11.9579 154.462 14.9238C154.462 17.8897 152.599 19.8585 150.38 19.8585C149.411 19.8585 148.263 19.4749 147.676 18.4266V19.6283H145.253V6.9209ZM157.675 12.5966C157.675 12.0085 158.313 11.6761 159.206 11.6761C160.303 11.6761 161.042 12.2386 161.246 13.0313H163.491C163.16 10.858 161.374 9.9375 159.333 9.9375C157.293 9.9375 155.481 11.0369 155.481 12.75C155.481 14.4631 156.655 15.2046 158.415 15.5625L159.818 15.8693C160.609 16.0483 161.348 16.3296 161.348 17.0199C161.348 17.7103 160.66 18.0938 159.639 18.0938C158.389 18.0938 157.752 17.429 157.599 16.5086H155.277C155.507 18.6563 157.242 19.858 159.563 19.858C161.706 19.858 163.644 18.7586 163.644 16.8154C163.644 14.8722 162.037 14.3864 160.175 13.9773L158.925 13.696C158.032 13.4915 157.675 13.108 157.675 12.5966Z" fill="#010202"></path><path d="M58.9116 35.9661C59.8554 35.8383 60.6207 35.4036 61.2074 34.6366C61.7686 33.8695 62.0747 32.8468 62.0747 31.5172C62.0747 30.2388 61.7941 29.2672 61.2329 28.5769C60.6717 27.8865 59.932 27.4774 58.9881 27.3496C58.7841 27.324 58.58 27.2985 58.3504 27.2985C58.1464 27.2985 57.8913 27.2729 57.6107 27.2729H56.0546V36.0173H57.5597C57.8403 36.0173 58.0953 36.0173 58.2739 36.0173C58.5035 35.9917 58.7076 35.9917 58.9116 35.9661ZM59.5238 25.3553C60.2636 25.432 60.9523 25.6365 61.59 25.9178C62.2278 26.199 62.7889 26.5825 63.2481 27.0939C63.7073 27.6053 64.0899 28.2189 64.345 28.9348C64.6256 29.6507 64.7531 30.5201 64.7531 31.4661C64.7531 32.4377 64.6256 33.307 64.345 34.0741C64.0644 34.8411 63.7073 35.4803 63.2226 36.0173C62.7379 36.5542 62.1767 36.9888 61.539 37.2957C60.9013 37.6025 60.2126 37.807 59.4728 37.9093C59.1412 37.9349 58.8861 37.9604 58.6821 37.986C58.478 37.986 58.1974 37.986 57.8658 37.986H53.5293V25.2786H57.9168C58.2484 25.2786 58.529 25.2786 58.7331 25.2786C58.9371 25.2786 59.2177 25.3297 59.5238 25.3553Z" fill="#010202"></path><path d="M66.233 28.1934H68.7584V38.0116H66.233V28.1934ZM67.5084 24.5371C67.9166 24.5371 68.2737 24.665 68.5288 24.9206C68.7839 25.1763 68.9114 25.4831 68.9114 25.8922C68.9114 26.3013 68.7839 26.6337 68.5288 26.8638C68.2737 27.1195 67.9421 27.2218 67.5084 27.2218C67.1003 27.2218 66.7432 27.0939 66.4881 26.8638C66.233 26.6082 66.1055 26.3013 66.1055 25.8922C66.1055 25.5087 66.233 25.1763 66.4881 24.9206C66.7432 24.665 67.1003 24.5371 67.5084 24.5371Z" fill="#010202"></path><path d="M75.6197 27.9635C75.9003 27.9635 76.1299 27.9891 76.3339 28.0402V30.0857C75.2881 30.009 74.4973 30.2391 73.9616 30.7505C73.426 31.2618 73.1709 32.1823 73.1709 33.5118V38.0118H70.6455V28.1936H73.1709V29.9834L73.9361 28.6283C74.1912 28.3982 74.4463 28.2448 74.7524 28.1425C75.0585 28.0146 75.3391 27.9635 75.6197 27.9635Z" fill="#010202"></path><path d="M81.334 29.7273C80.7473 29.7273 80.2626 29.9318 79.8545 30.3153C79.4718 30.6989 79.2167 31.3125 79.0892 32.1051H83.4002C83.3236 31.3381 83.0941 30.75 82.7624 30.3409C82.4308 29.9318 81.9462 29.7273 81.334 29.7273ZM86.0275 32.8977V33.2813C86.0275 33.4347 86.0276 33.5881 86.002 33.7415H79.0382C79.0637 34.2529 79.1657 34.6875 79.2933 35.0199C79.4208 35.3523 79.5994 35.6336 79.8034 35.8637C80.0075 36.0682 80.2371 36.2216 80.4922 36.3239C80.7473 36.4262 81.0279 36.4517 81.334 36.4517C81.8951 36.4517 82.3543 36.2983 82.7114 36.0171C83.0685 35.7358 83.2981 35.3267 83.3747 34.7898H85.9C85.7725 35.3523 85.5684 35.8637 85.2878 36.2983C85.0072 36.733 84.6501 37.0909 84.2675 37.3722C83.8593 37.6534 83.4002 37.858 82.89 38.0114C82.3798 38.1648 81.8441 38.2415 81.2574 38.2415C80.5942 38.2415 79.9565 38.1392 79.3698 37.9347C78.7831 37.7302 78.2984 37.3978 77.8648 36.9887C77.4311 36.554 77.0995 36.0426 76.8444 35.3779C76.5893 34.7387 76.4873 33.9716 76.4873 33.1279C76.4873 32.3864 76.6148 31.696 76.8444 31.0568C77.074 30.4176 77.4056 29.8551 77.8393 29.3949C78.2729 28.9347 78.7831 28.5767 79.3953 28.321C80.0075 28.0653 80.6962 27.9375 81.436 27.9375C82.1757 27.9375 82.839 28.0653 83.4002 28.321C83.9613 28.5767 84.446 28.9347 84.8287 29.3949C85.2113 29.8551 85.5174 30.3665 85.6959 30.9801C85.951 31.5938 86.0275 32.233 86.0275 32.8977Z" fill="#010202"></path><path d="M91.716 27.9375C92.3793 27.9375 92.966 28.0398 93.5016 28.2187C94.0373 28.3977 94.4965 28.679 94.8791 29.0114C95.2617 29.3437 95.5678 29.7528 95.7719 30.2131C96.0015 30.6733 96.129 31.1847 96.1801 31.7216H93.6802C93.5526 31.0057 93.3231 30.4943 92.9659 30.1875C92.6088 29.8807 92.1752 29.7273 91.6395 29.7273C91.0018 29.7273 90.4661 29.983 90.058 30.5199C89.6498 31.0568 89.4458 31.875 89.4458 33C89.4458 34.2273 89.6498 35.0966 90.058 35.6336C90.4661 36.1705 91.0018 36.4517 91.6395 36.4517C92.1497 36.4517 92.5578 36.2983 92.9149 35.9915C93.2465 35.6847 93.5016 35.2245 93.6292 34.5853H96.1545C95.9505 35.8125 95.4148 36.7074 94.573 37.3211C93.7312 37.9347 92.7109 38.2415 91.4864 38.2415C90.8232 38.2415 90.211 38.1393 89.6498 37.9091C89.0886 37.7046 88.5785 37.3722 88.1703 36.9631C87.7622 36.5284 87.4306 36.0171 87.1755 35.3779C86.9459 34.7387 86.8184 33.9972 86.8184 33.1534C86.8184 32.3097 86.9459 31.5682 87.201 30.929C87.4561 30.2898 87.8132 29.7273 88.2468 29.2926C88.6805 28.858 89.2162 28.5 89.8029 28.2699C90.4151 28.0653 91.0528 27.9375 91.716 27.9375Z" fill="#010202"></path><path d="M100.516 34.4835V34.9437C100.516 35.0716 100.516 35.225 100.542 35.3528C100.567 35.583 100.618 35.7875 100.669 35.9409C100.72 36.0943 100.822 36.2222 100.976 36.2989C101.129 36.3756 101.307 36.4267 101.537 36.4523C101.766 36.4779 102.047 36.4779 102.404 36.4523V38.1142C102.123 38.1654 101.843 38.1909 101.562 38.2165C101.282 38.2421 101.001 38.2421 100.72 38.2421C99.7766 38.2421 99.1134 38.0886 98.7052 37.7563C98.3226 37.4239 98.093 36.9125 98.0165 36.2477C97.991 36.0176 97.991 35.8131 97.991 35.583V34.8159V29.9835H96.5625V28.296H97.991V25.8926H100.516V28.296H102.532V29.9835H100.516V34.4835V34.4835Z" fill="#010202"></path><path d="M107.913 36.4775C108.679 36.4775 109.291 36.1707 109.724 35.5827C110.158 34.9946 110.362 34.1508 110.362 33.1025C110.362 32.0287 110.158 31.2105 109.724 30.6224C109.291 30.0343 108.704 29.7275 107.913 29.7275C107.148 29.7275 106.536 30.0343 106.102 30.6224C105.668 31.2105 105.464 32.0542 105.464 33.1025C105.464 34.1508 105.668 34.9946 106.102 35.5827C106.536 36.1707 107.148 36.4775 107.913 36.4775ZM107.913 27.9377C108.73 27.9377 109.444 28.0656 110.082 28.3213C110.719 28.577 111.255 28.9349 111.689 29.3951C112.122 29.8554 112.454 30.3923 112.683 31.0315C112.913 31.6707 113.015 32.3355 113.015 33.1025C113.015 33.844 112.913 34.5344 112.683 35.148C112.454 35.7872 112.122 36.3241 111.689 36.7844C111.255 37.2446 110.719 37.6026 110.082 37.8582C109.444 38.1139 108.73 38.2418 107.913 38.2418C107.097 38.2418 106.383 38.1139 105.745 37.8582C105.107 37.6026 104.572 37.2446 104.138 36.7844C103.704 36.3241 103.373 35.7872 103.143 35.148C102.914 34.5088 102.812 33.8184 102.812 33.1025C102.812 32.361 102.914 31.6707 103.143 31.0315C103.373 30.3923 103.704 29.8554 104.138 29.3951C104.572 28.9349 105.107 28.577 105.745 28.3213C106.383 28.0656 107.122 27.9377 107.913 27.9377Z" fill="#010202"></path><path d="M119.24 27.9634C119.52 27.9634 119.75 27.9889 119.954 28.0401V30.0855C118.908 30.0088 118.117 30.239 117.582 30.7503C117.046 31.2617 116.791 32.1822 116.791 33.5117V38.0117H114.266V28.1935H116.791V29.9833L117.556 28.6281C117.811 28.398 118.066 28.2446 118.373 28.1424C118.653 28.0145 118.959 27.9634 119.24 27.9634Z" fill="#010202"></path><path d="M126.765 38.3695C126.51 39.0343 126.255 39.5968 125.974 40.0315C125.694 40.4917 125.413 40.8497 125.082 41.1053C124.75 41.3866 124.393 41.5656 124.01 41.6934C123.628 41.8213 123.168 41.8724 122.684 41.8724C122.454 41.8724 122.25 41.8724 122.072 41.8468C121.893 41.8468 121.714 41.8212 121.536 41.7957V40.057C121.663 40.0826 121.791 40.0826 121.919 40.0826H122.301C122.735 40.0826 123.092 39.9803 123.398 39.8014C123.704 39.6224 123.934 39.2644 124.163 38.7786L124.291 38.4718L120.312 28.1934H123.143L125.566 36.0684L127.964 28.1934H130.745L126.765 38.3695Z" fill="#010202"></path></svg>
               </div>

                <div className="header__menu">
                    <ul>
                        <li>
                            <a >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-testid="Teams-icon" className="mr-2 h-5 w-5 group-hover:fill-slate-900 fill-slate-600">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                                Teams
                            </a>
                        </li>
                        <li>
                            <a className="on-focus-group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-testid="Members-icon" className="mr-2 h-5 w-5 group-hover:fill-slate-900 fill-slate-600">
                                    <path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" ></path>
                                </svg>
                                Members
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="Projects-icon" className="mr-2 h-5 w-5 group-hover:fill-slate-900 fill-slate-900">
                                    <path d="M10.2282 0.960208C10.0867 0.879931 9.91328 0.879931 9.77183 0.960208L1.40845 5.6874C1.40844 5.68741 1.40842 5.68742 1.4084 5.68743C1.26281 5.76963 1.17295 5.92392 1.17295 6.09104V15.9092C1.17295 16.0763 1.2628 16.2306 1.4084 16.3128C1.40842 16.3128 1.40844 16.3128 1.40846 16.3128L9.77198 21.0401C9.91336 21.12 10.0867 21.12 10.228 21.0401L18.5916 16.3128C18.5916 16.3128 18.5916 16.3128 18.5916 16.3128C18.7372 16.2306 18.8271 16.0763 18.8271 15.9092V6.09104C18.8271 5.92391 18.7372 5.7696 18.5916 5.6874L10.2282 0.960208ZM2.10013 15.0982V6.90036L7.63139 10.1471L6.43428 12.5487L2.10013 15.0982ZM9.53613 15.8055L9.53624 19.8419L2.56438 15.9011L5.9397 13.9155C5.96237 13.9666 5.99451 14.0141 6.03564 14.0552C7.07302 15.0926 8.28575 15.6874 9.53613 15.8055ZM13.9642 14.0552C14.0031 14.0163 14.0339 13.9717 14.0563 13.9238L17.4339 15.9021L10.4637 19.8419V15.8055C11.7141 15.6874 12.9269 15.0926 13.9642 14.0552ZM12.3628 10.1509L17.9 6.90069V15.1003L13.5743 12.5668L12.3628 10.1509ZM10.4487 6.33445L10.4613 2.15716L17.4349 6.09859L11.9463 9.32031L10.4487 6.33445ZM9.52155 6.35638L8.0462 9.31564L2.56537 6.09865L9.53415 2.15976L9.52155 6.35638Z" fill="#475569" stroke="#0F172A" ></path>
                                </svg>
                                Projects
                            </a>

                        </li>
                        <li>
                            <a>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="IRL Gatherings-icon" className="mr-2 h-5 w-5 group-hover:fill-slate-900 fill-slate-600">
                                    <path d="M10 11.6667C9.76389 11.6667 9.56611 11.5867 9.40667 11.4267C9.24667 11.2673 9.16667 11.0695 9.16667 10.8334C9.16667 10.5973 9.24667 10.3992 9.40667 10.2392C9.56611 10.0798 9.76389 10.0001 10 10.0001C10.2361 10.0001 10.4342 10.0798 10.5942 10.2392C10.7536 10.3992 10.8333 10.5973 10.8333 10.8334C10.8333 11.0695 10.7536 11.2673 10.5942 11.4267C10.4342 11.5867 10.2361 11.6667 10 11.6667ZM6.66667 11.6667C6.43056 11.6667 6.2325 11.5867 6.0725 11.4267C5.91306 11.2673 5.83333 11.0695 5.83333 10.8334C5.83333 10.5973 5.91306 10.3992 6.0725 10.2392C6.2325 10.0798 6.43056 10.0001 6.66667 10.0001C6.90278 10.0001 7.10083 10.0798 7.26083 10.2392C7.42028 10.3992 7.5 10.5973 7.5 10.8334C7.5 11.0695 7.42028 11.2673 7.26083 11.4267C7.10083 11.5867 6.90278 11.6667 6.66667 11.6667ZM13.3333 11.6667C13.0972 11.6667 12.8994 11.5867 12.74 11.4267C12.58 11.2673 12.5 11.0695 12.5 10.8334C12.5 10.5973 12.58 10.3992 12.74 10.2392C12.8994 10.0798 13.0972 10.0001 13.3333 10.0001C13.5694 10.0001 13.7672 10.0798 13.9267 10.2392C14.0867 10.3992 14.1667 10.5973 14.1667 10.8334C14.1667 11.0695 14.0867 11.2673 13.9267 11.4267C13.7672 11.5867 13.5694 11.6667 13.3333 11.6667ZM10 15.0001C9.76389 15.0001 9.56611 14.9201 9.40667 14.7601C9.24667 14.6006 9.16667 14.4029 9.16667 14.1667C9.16667 13.9306 9.24667 13.7329 9.40667 13.5734C9.56611 13.4134 9.76389 13.3334 10 13.3334C10.2361 13.3334 10.4342 13.4134 10.5942 13.5734C10.7536 13.7329 10.8333 13.9306 10.8333 14.1667C10.8333 14.4029 10.7536 14.6006 10.5942 14.7601C10.4342 14.9201 10.2361 15.0001 10 15.0001ZM6.66667 15.0001C6.43056 15.0001 6.2325 14.9201 6.0725 14.7601C5.91306 14.6006 5.83333 14.4029 5.83333 14.1667C5.83333 13.9306 5.91306 13.7329 6.0725 13.5734C6.2325 13.4134 6.43056 13.3334 6.66667 13.3334C6.90278 13.3334 7.10083 13.4134 7.26083 13.5734C7.42028 13.7329 7.5 13.9306 7.5 14.1667C7.5 14.4029 7.42028 14.6006 7.26083 14.7601C7.10083 14.9201 6.90278 15.0001 6.66667 15.0001ZM13.3333 15.0001C13.0972 15.0001 12.8994 14.9201 12.74 14.7601C12.58 14.6006 12.5 14.4029 12.5 14.1667C12.5 13.9306 12.58 13.7329 12.74 13.5734C12.8994 13.4134 13.0972 13.3334 13.3333 13.3334C13.5694 13.3334 13.7672 13.4134 13.9267 13.5734C14.0867 13.7329 14.1667 13.9306 14.1667 14.1667C14.1667 14.4029 14.0867 14.6006 13.9267 14.7601C13.7672 14.9201 13.5694 15.0001 13.3333 15.0001ZM4.16667 18.3334C3.70833 18.3334 3.31583 18.1704 2.98917 17.8442C2.66306 17.5176 2.5 17.1251 2.5 16.6667V5.00008C2.5 4.54175 2.66306 4.14953 2.98917 3.82341C3.31583 3.49675 3.70833 3.33341 4.16667 3.33341H5V2.50008C5 2.26397 5.07972 2.06591 5.23917 1.90591C5.39917 1.74647 5.59722 1.66675 5.83333 1.66675C6.06944 1.66675 6.2675 1.74647 6.4275 1.90591C6.58694 2.06591 6.66667 2.26397 6.66667 2.50008V3.33341H13.3333V2.50008C13.3333 2.26397 13.4133 2.06591 13.5733 1.90591C13.7328 1.74647 13.9306 1.66675 14.1667 1.66675C14.4028 1.66675 14.6006 1.74647 14.76 1.90591C14.92 2.06591 15 2.26397 15 2.50008V3.33341H15.8333C16.2917 3.33341 16.6842 3.49675 17.0108 3.82341C17.3369 4.14953 17.5 4.54175 17.5 5.00008V16.6667C17.5 17.1251 17.3369 17.5176 17.0108 17.8442C16.6842 18.1704 16.2917 18.3334 15.8333 18.3334H4.16667ZM4.16667 16.6667H15.8333V8.33341H4.16667V16.6667Z" fill="#64748B"></path>
                                </svg>
                                IRL Gathering
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header__button">
                <div>
                    <button className="header__button_question">
                        <img src="./question.svg"></img>
                    </button>
                </div>
                <div>
                    <button className="header__button_join ">
                        Join the network
                        <div >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.61427 5.53233C3.81426 5.77481 4.18574 5.77481 4.38573 5.53233L7.65534 1.56814C7.92431 1.24202 7.69234 0.75 7.26961 0.75L0.730393 0.75C0.307659 0.75 0.0756859 1.24202 0.344665 1.56814L3.61427 5.53233Z" fill="currentColor"></path>
                        </svg>
                        </div>
                    </button>
                </div>
                <div>
                    <button className="header__button_login">Login</button>
                </div>

            </div>
        </header>
    )
}

export default Header

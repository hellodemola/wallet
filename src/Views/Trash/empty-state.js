import '../../Styles/Home/empty-state.css'

const Home = () => {
    return (
        <div className="container">
            <aside>
                <div className="sidebar">
                    <div className="logo-div">
                        <a href="">
                            <svg width="87" height="25" viewBox="0 0 87 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.8117 20H40.4481L43.3373 9.56818H43.4395L46.3287 20H47.9651L51.5447 6.90909H49.9339L47.1981 17.571H47.0702L44.2833 6.90909H42.4935L39.7066 17.571H39.5787L36.843 6.90909H35.2322L38.8117 20ZM55.2904 20.2301C57.0035 20.2301 57.8983 19.3097 58.2052 18.6705H58.2819V20H59.7904V13.5312C59.7904 10.4119 57.4126 10.054 56.1597 10.054C54.6768 10.054 52.9893 10.5653 52.2222 12.3551L53.654 12.8665C53.9864 12.1506 54.7726 11.3835 56.2108 11.3835C57.5979 11.3835 58.2819 12.1186 58.2819 13.3778V13.429C58.2819 14.1577 57.5404 14.0938 55.7506 14.3239C53.9289 14.5604 51.941 14.9631 51.941 17.2131C51.941 19.1307 53.4239 20.2301 55.2904 20.2301ZM55.5205 18.875C54.3188 18.875 53.4495 18.3381 53.4495 17.2898C53.4495 16.1392 54.4978 15.7812 55.6739 15.6278C56.3131 15.5511 58.0262 15.3722 58.2819 15.0653V16.446C58.2819 17.6733 57.3103 18.875 55.5205 18.875ZM64.0523 6.90909H62.5438V20H64.0523V6.90909ZM68.3238 6.90909H66.8153V20H68.3238V6.90909ZM75.2032 20.2045C77.1975 20.2045 78.6549 19.2074 79.1151 17.7244L77.6578 17.3153C77.2742 18.3381 76.3857 18.8494 75.2032 18.8494C73.4326 18.8494 72.2117 17.7053 72.1414 15.6023H79.2686V14.9631C79.2686 11.3068 77.0953 10.054 75.0498 10.054C72.3907 10.054 70.6265 12.1506 70.6265 15.1676C70.6265 18.1847 72.3651 20.2045 75.2032 20.2045ZM72.1414 14.2983C72.2437 12.7706 73.324 11.4091 75.0498 11.4091C76.6862 11.4091 77.7345 12.6364 77.7345 14.2983H72.1414ZM85.8332 10.1818H83.7366V7.82955H82.2281V10.1818H80.7451V11.4602H82.2281V17.5966C82.2281 19.3097 83.6088 20.1278 84.8872 20.1278C85.4497 20.1278 85.8076 20.0256 86.0122 19.9489L85.7053 18.5938C85.5775 18.6193 85.373 18.6705 85.0406 18.6705C84.3758 18.6705 83.7366 18.4659 83.7366 17.1875V11.4602H85.8332V10.1818Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4112 6.86965C9.0298 4.47697 9.82385 1.41851 12.1947 0L23.1147 18.9973L20.2854 23.9722L10.4112 6.86965ZM0.931641 4.86734C3.30917 3.49467 6.34931 4.3092 7.72207 6.68668L14.8302 18.9972L11.9779 24L0.931641 4.86734ZM20.2429 4.46608C19.706 4.46608 19.2022 4.72584 18.8909 5.16326C18.5193 5.68528 18.4815 6.37458 18.7936 6.93414L22.8976 14.2901L28.5695 4.46608L20.2429 4.46608Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                    <div className="menu">
                        <div className="menu-flex">
                            <div className="menu-flex-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.71429 2C2.76751 2 2 2.76751 2 3.71429V6.78571C2 7.73249 2.76751 8.5 3.71429 8.5H5.42857C6.37535 8.5 7.14286 7.73249 7.14286 6.78571V3.71429C7.14286 2.76751 6.37535 2 5.42857 2H3.71429Z" fill="white" />
                                    <path d="M3.71429 9.78571C2.76751 9.78571 2 10.5532 2 11.5V12.2857C2 13.2325 2.76751 14 3.71429 14H5.42857C6.37535 14 7.14286 13.2325 7.14286 12.2857V11.5C7.14286 10.5532 6.37535 9.78571 5.42857 9.78571H3.71429Z" fill="white" />
                                    <path d="M8.85714 3.71429C8.85714 2.76751 9.62465 2 10.5714 2H12.2857C13.2325 2 14 2.76751 14 3.71429V4.40593C14 5.35271 13.2325 6.12022 12.2857 6.12022H10.5714C9.62465 6.12022 8.85714 5.35271 8.85714 4.40593V3.71429Z" fill="white" />
                                    <path d="M8.85714 9.21429C8.85714 8.26751 9.62465 7.5 10.5714 7.5H12.2857C13.2325 7.5 14 8.26751 14 9.21429V12.2857C14 13.2325 13.2325 14 12.2857 14H10.5714C9.62465 14 8.85714 13.2325 8.85714 12.2857V9.21429Z" fill="white" />
                                </svg>

                            </div>
                            <div>
                                <p className="sidebar-menu">Home</p>
                            </div>
                        </div>
                        <div className="menu-flex">
                            <div className="menu-flex-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.2002 1.6001C6.75837 1.6001 6.4002 1.95827 6.4002 2.4001C6.4002 2.84193 6.75837 3.2001 7.2002 3.2001H8.8002C9.24202 3.2001 9.6002 2.84193 9.6002 2.4001C9.6002 1.95827 9.24202 1.6001 8.8002 1.6001H7.2002Z" fill="#B3BECF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.2002 4.0001C3.2002 3.11644 3.91654 2.4001 4.8002 2.4001C4.8002 3.72558 5.87471 4.8001 7.2002 4.8001H8.8002C10.1257 4.8001 11.2002 3.72558 11.2002 2.4001C12.0839 2.4001 12.8002 3.11644 12.8002 4.0001V12.8001C12.8002 13.6838 12.0839 14.4001 11.2002 14.4001H4.8002C3.91654 14.4001 3.2002 13.6838 3.2002 12.8001V4.0001ZM5.6002 7.2001C5.15837 7.2001 4.8002 7.55827 4.8002 8.0001C4.8002 8.44193 5.15837 8.8001 5.6002 8.8001H5.6082C6.05002 8.8001 6.4082 8.44193 6.4082 8.0001C6.4082 7.55827 6.05002 7.2001 5.6082 7.2001H5.6002ZM8.0002 7.2001C7.55837 7.2001 7.2002 7.55827 7.2002 8.0001C7.2002 8.44193 7.55837 8.8001 8.0002 8.8001H10.4002C10.842 8.8001 11.2002 8.44193 11.2002 8.0001C11.2002 7.55827 10.842 7.2001 10.4002 7.2001H8.0002ZM5.6002 10.4001C5.15837 10.4001 4.8002 10.7583 4.8002 11.2001C4.8002 11.6419 5.15837 12.0001 5.6002 12.0001H5.6082C6.05002 12.0001 6.4082 11.6419 6.4082 11.2001C6.4082 10.7583 6.05002 10.4001 5.6082 10.4001H5.6002ZM8.0002 10.4001C7.55837 10.4001 7.2002 10.7583 7.2002 11.2001C7.2002 11.6419 7.55837 12.0001 8.0002 12.0001H10.4002C10.842 12.0001 11.2002 11.6419 11.2002 11.2001C11.2002 10.7583 10.842 10.4001 10.4002 10.4001H8.0002Z" fill="#B3BECF" />
                                </svg>

                            </div>
                            <div>
                                <p className="sidebar-menu">History</p>
                            </div>
                        </div>
                        <div className="menu-flex">
                            <div className="menu-flex-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.39961 7.1999C7.72509 7.1999 8.79961 6.12539 8.79961 4.7999C8.79961 3.47442 7.72509 2.3999 6.39961 2.3999C5.07413 2.3999 3.99961 3.47442 3.99961 4.7999C3.99961 6.12539 5.07413 7.1999 6.39961 7.1999Z" fill="#B3BECF" />
                                    <path d="M6.39961 8.7999C9.05058 8.7999 11.1996 10.9489 11.1996 13.5999H1.59961C1.59961 10.9489 3.74864 8.7999 6.39961 8.7999Z" fill="#B3BECF" />
                                    <path d="M12.7996 5.5999C12.7996 5.15807 12.4414 4.7999 11.9996 4.7999C11.5578 4.7999 11.1996 5.15807 11.1996 5.5999V6.3999H10.3996C9.95778 6.3999 9.59961 6.75807 9.59961 7.1999C9.59961 7.64173 9.95778 7.9999 10.3996 7.9999H11.1996V8.7999C11.1996 9.24173 11.5578 9.5999 11.9996 9.5999C12.4414 9.5999 12.7996 9.24173 12.7996 8.7999V7.9999H13.5996C14.0414 7.9999 14.3996 7.64173 14.3996 7.1999C14.3996 6.75807 14.0414 6.3999 13.5996 6.3999H12.7996V5.5999Z" fill="#B3BECF" />
                                </svg>
                            </div>
                            <div>
                                <p className="sidebar-menu">Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <div class="main">
                <div class="header-flex">
                    <div class="margin-r-44">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M22 19.6C22 19.8209 21.8209 20 21.6 20H2.4C2.17909 20 2 19.8209 2 19.6V18.4C2 18.1791 2.17909 18 2.4 18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H21.6C21.8209 18 22 18.1791 22 18.4V19.6ZM5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" fill="#3A434B" />
                                <circle cx="18" cy="5" r="5" fill="#D66F0F" stroke="white" stroke-width="2" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div>
                        <p>Kingsley Omin</p>
                    </div>
                    <div>
                        <p class="round-bg">KO</p>
                    </div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16L6 10H18L12 16Z" fill="#3A434B" />
                        </svg>
                    </div>
                </div>
                <div class="welcome-flex">
                    <div class="align-bottom">
                        <h2>
                            Hello Kingsley 👋🏿
                    </h2>
                    </div>
                    <div class="header-flex">
                        <div>
                            <button>Transfer Funds</button>
                        </div>
                        <div>
                            <button class="btn">+ Fund Wallet</button>
                        </div>
                    </div>
                </div>
                <div class="welcome-flex m-bottom">
                    <div class="funds">
                        <h2>₦00.00</h2>
                        <p>Naira Balance</p>
                    </div>
                    <div class="funds">
                        <h2>$00.00</h2>
                        <p>Dollar Balance</p>
                    </div>
                </div>
                <div class="transaction-history">
                    <div class="h3">
                        <h3>Transaction History</h3>
                    </div>
                    <div class="transaction-history">
                        <div class="empty-state">
                            <svg width="85" height="96" viewBox="0 0 85 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.4055 41.278V37.0745C33.4055 35.9478 32.9579 34.8672 32.1612 34.0705C31.3645 33.2738 30.2839 32.8262 29.1572 32.8262H8.30326C7.17683 32.8266 6.09669 33.2744 5.30034 34.0711C4.504 34.8678 4.05664 35.9481 4.05664 37.0745V91.7514C4.05664 92.8782 4.50423 93.9588 5.30095 94.7555C6.09767 95.5522 7.17825 95.9998 8.30498 95.9998H80.22C81.3467 95.9998 82.4273 95.5522 83.224 94.7555C84.0207 93.9588 84.4683 92.8782 84.4683 91.7514V49.7764C84.4683 48.6497 84.0207 47.5691 83.224 46.7724C82.4273 45.9757 81.3467 45.5281 80.22 45.5281H37.6504C36.524 45.5272 35.444 45.079 34.648 44.282C33.852 43.485 33.4051 42.4045 33.4055 41.278Z" fill="#9DA9B3" />
                                <path d="M81.7384 0.000936828L33.1765 0.0941693C32.8757 0.0947467 32.6323 0.339047 32.6329 0.639829L32.7512 62.2898C32.7518 62.5906 32.9961 62.8339 33.2969 62.8333L81.8589 62.7401C82.1597 62.7395 82.403 62.4952 82.4025 62.1945L82.2841 0.544505C82.2835 0.243723 82.0392 0.00035937 81.7384 0.000936828Z" fill="#F4F5F6" />
                                <path d="M75.9291 21.1002L43.4453 21.1626L43.4472 22.1364L75.931 22.074L75.9291 21.1002Z" fill="#9DA9B3" />
                                <path d="M75.9383 25.5024L37.7705 25.5757L37.772 26.3771L75.9398 26.3038L75.9383 25.5024Z" fill="#9DA9B3" />
                                <path d="M75.9451 30.313L37.7773 30.3862L37.7789 31.1876L75.9467 31.1144L75.9451 30.313Z" fill="#9DA9B3" />
                                <path d="M75.9578 35.5688L37.79 35.6421L37.7916 36.4435L75.9594 36.3702L75.9578 35.5688Z" fill="#9DA9B3" />
                                <path d="M61.8231 40.8938L37.7998 40.9399L37.8013 41.7414L61.8247 41.6952L61.8231 40.8938Z" fill="#9DA9B3" />
                                <path d="M75.9852 49.8901L37.8174 49.9634L37.8189 50.7648L75.9867 50.6915L75.9852 49.8901Z" fill="#24DB57" />
                                <path d="M75.994 54.7006L37.8262 54.7739L37.8277 55.5753L75.9955 55.5021L75.994 54.7006Z" fill="#24DB57" />
                                <path d="M76.0037 59.9575L37.8359 60.0308L37.8375 60.8322L76.0053 60.7589L76.0037 59.9575Z" fill="#24DB57" />
                                <path d="M77.0322 4.95292L37.5029 5.02881L37.5268 17.4464L77.0561 17.3705L77.0322 4.95292Z" fill="#FAD7B8" />
                                <path d="M75.6004 37.1506L63.7344 37.1733L63.7566 48.7516L75.6226 48.7288L75.6004 37.1506Z" fill="white" />
                                <path d="M29.3489 41.278V37.0745C29.3489 35.9478 28.9013 34.8672 28.1046 34.0705C27.3079 33.2738 26.2273 32.8262 25.1005 32.8262H4.24662C3.12019 32.8266 2.04005 33.2744 1.2437 34.0711C0.447355 34.8678 -9.26917e-08 35.9481 0 37.0745L0 91.7514C0 92.8782 0.447592 93.9588 1.24431 94.7555C2.04103 95.5522 3.12161 95.9998 4.24834 95.9998H76.1634C77.2901 95.9998 78.3707 95.5522 79.1674 94.7555C79.9641 93.9588 80.4117 92.8782 80.4117 91.7514V49.7764C80.4117 48.6497 79.9641 47.5691 79.1674 46.7724C78.3707 45.9757 77.2901 45.5281 76.1634 45.5281H33.5938C32.4673 45.5272 31.3874 45.079 30.5914 44.282C29.7953 43.485 29.3484 42.4045 29.3489 41.278Z" fill="#D7DCE0" />
                            </svg>
                        </div>
                        <p>No Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
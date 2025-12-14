

const ICONS = {
    nav: {
        home: "images/home.svg",
        search: "images/search.svg",
        fav: "images/star.svg",
        history: "images/file.svg"
    },
    header: {
        menu: "images/filter.svg",
        search: "https://cdn-icons-png.flaticon.com/512/54/54481.png",
        bell: "https://cdn-icons-png.flaticon.com/512/3602/3602145.png",
        user: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
        back: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
        logo: "images/logo.png", // 의자 아이콘
        logowhite: "images/logo_white.png"
    },
    actions: {
        starOn: "images/star_yellow.png", // 노란 별
        starOff: "images/star_gray.png", // 빈/회색 별
        share: "https://cdn-icons-png.flaticon.com/512/1828/1828950.png",
        check: "https://cdn-icons-png.flaticon.com/512/190/190411.png" // 성공 체크마크
    }
};

// 목업 데이터

const RECENT_ROOMS = [
    { 
        id: 101, 
        title: "학생복지관 3층 Exchange Box", 
        image: "images/example6.png",
        isFav: false,
        label: "최근 검색",
        capacity: "수용 인원: 최대 5명",
        timeRange: "이용 가능 시간대: 12:00 ~ 14:00",
        equip: "장비: 빔프로젝터 O, 멀티콘센트 O"
    },
    { 
        id: 102, 
        title: "학술정보관 1층 커리어 룸", 
        image: "images/example1.png",
        isFav: true, 
        label: "최근 사용",
        capacity: "수용 인원: 최대 5명",
        timeRange: "이용 가능 시간대: 12:00 ~ 14:00",
        equip: "장비: 빔프로젝터 O, 멀티콘센트 O"
    },
    { 
        id: 103, 
        title: "학술정보관 4층 그룹스터디룸", 
        image: "images/example2.png",
        isFav: true,
        capacity: "수용 인원: 최대 8명",
        timeRange: "이용 가능 시간대: 12:00 ~ 16:00",
        equip: "장비: 빔프로젝터 O, 멀티콘센트 O"
    }
];

const HOME_LIST_ROOMS = [
    { 
        id: 201, 
        title: "제1공학관 1층 해동스터디룸 4호", 
        timeRange: "10:30 ~ 12:00", 
        maxTime: "최대 2시간", 
        extend: "불가", 
        penalty: "있음", 
        projector: "없음", 
        image: "images/example5.png" 
    },
    { 
        id: 202, 
        title: "ERICA학술정보관 1층 커리어홀", 
        timeRange: "13:00 ~ 15:00", 
        maxTime: "최대 3시간", 
        extend: "가능", 
        penalty: "없음", 
        projector: "있음", 
        image: "images/example1.png" 
    }
];

const SEARCH_ALT_ROOMS = [
    { 
        id: 301, 
        title: "학술정보관 1층 커리어 룸", 
        capacity: "수용 인원: 최대 5명", 
        time: "이용 가능 시간대: 12:00 ~ 14:00", 
        equip: "장비: 빔프로젝터 O, 멀티콘센트 O", 
        image: "images/example1.png", 
        isFav: true
    },
    { 
        id: 302, 
        title: "학술정보관 4층 그룹스터디룸", 
        capacity: "수용 인원: 최대 8명", 
        time: "이용 가능 시간대: 12:00 ~ 16:00", 
        equip: "장비: 빔프로젝터 O, 멀티콘센트 O", 
        image: "images/example2.png", // 흰색 테이블 방
        isFav: true
    }
];

const SEARCH_LIST_ROOMS = [
    { 
        id: 401, 
        title: "제1공학관 105호(PBL강의실)", 
        capacity: "수용 인원: 최대 30명", 
        time: "이용 가능 시간대: 13:00 ~ 18:00", 
        equip: "장비: 빔프로젝터 O, 멀티콘센트 X", 
        image: "images/example3.png", // 둥근 테이블이 있는 큰 방
        isFav: false 
    },
    { 
        id: 402, 
        title: "창업교육센터 Knowledge Bunker", 
        capacity: "수용 인원: 최대 6명", 
        time: "이용 가능 시간대: 09:00 ~ 18:00", 
        equip: "장비: 빔프로젝터 O, 멀티콘센트 O", 
        image: "images/example4.png", 
        isFav: false 
    }
];

const RECENT_USAGE_DATA = [
    { 
        id: 901, 
        title: "제1공학관 105호(PBL강의실)", 
        capacity: "수용 인원: 최대 30명", 
        time: "이용 가능 시간대: 13:00 ~ 18:00", 
        equip: "장비: 빔프로젝터 O, 멀티콘센트 X", 
        image: "images/example3.png", 
        isFav: false 
    },
    { 
        id: 902, 
        title: "창업교육센터 Knowledge Bunker", 
        capacity: "수용 인원: 최대 6명", 
        time: "이용 가능 시간대: 09:00 ~ 18:00", 
        equip: "장비: 빔프로젝터 O, 멀티콘센트 O", 
        image: "images/example4.png", 
        isFav: false 
    }
];

const HISTORY_CONFIRMED = [
    { 
        id: 501, 
        title: "제1공학관 105호(PBL강의실)", 
        capacity: "수용 인원: 최대 30명", 
        time: "이용 가능 시간대: 13:00 ~ 18:00", 
        equip: "장비: 빔프로젝터 O, 멀티콘센트 X", 
        image: "images/example3.png", 
        isFav: true 
    },
    { 
        id: 502, 
        title: "창업교육센터 Knowledge Bunker", 
        capacity: "수용 인원: 최대 6명", 
        time: "이용 가능 시간대: 09:00 ~ 18:00", 
        equip: "장비: 빔프로젝터 O, 멀티콘센트 O", 
        image: "images/example4.png", 
        isFav: true 
    }
];

// 주간 요일 데이터
const WEEK_DAYS = [
    { day: "Sun", date: 20, isRed: true }, { day: "Mon", date: 21, isSelected: true }, { day: "Tue", date: 22 }, { day: "Wed", date: 23 }, { day: "Thu", date: 24 }, { day: "Fri", date: 25 }, { day: "Sat", date: 26, isBlue: true }
];

// 태그 데이터
const TAGS_PURPOSE = ["전체", "팀 프로젝트", "개인 학습", "동아리 활동", "면접/발표 연습", "기타"];
const TAGS_EQUIP = ["화이트보드", "빔프로젝터", "모니터", "멀티 콘센트", "기타"];


const CommonRoomCard = ({ room, type = 'green', btn1 = '상세 보기', btn2 = '예약하기', onBtn1Click, onBtn2Click }) => {
    const [isFavorite, setIsFavorite] = React.useState(room.isFav || false);

    const toggleStar = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={`search-card ${type}`}>
            <img 
                src={isFavorite ? ICONS.actions.starOn : ICONS.actions.starOff} 
                className="star-img-btn" 
                onClick={toggleStar}
                alt="Favorite"
            />

            <div className="sc-top">
                <img src={room.image} className="sc-img" alt={room.title} />
                <div className="sc-info">
                    <div className="sc-title">{room.title}</div>
                    {room.capacity && <div>👤 {room.capacity}</div>}
                    {room.time && <div>🕒 {room.time}</div>}
                    {room.timeRange && <div>🕒 {room.timeRange}</div>}
                    {room.equip && <div>💻 {room.equip}</div>}
                    {room.maxTime && <div>최대 시간: {room.maxTime}</div>}
                    {room.extend && <div>연장: {room.extend}</div>}
                </div>
            </div>
            
            {btn1 && (
                <div className="sc-btns">
                    <button className="btn-slate" onClick={(e) => { e.stopPropagation(); onBtn1Click(); }}>{btn1}</button>
                    {btn2 && (
                        <button className="btn-mint" onClick={(e) => { e.stopPropagation(); onBtn2Click(); }}>{btn2}</button>
                    )}
                </div>
            )}
        </div>
    );
};

// 상세 보기
const DetailView = ({ room, onBack, onReserve, isFromHistory = false }) => {
    return (
        <>
            <div className="fav-header-simple">
                <img src={ICONS.header.back} className="back-icon-img" onClick={onBack} />
                공간 상세
            </div>

            <div className="content detail-content-wrapper">
                <div className="detail-top-row">
                    <img src={room.image} className="detail-main-img" />
                    <div className="detail-header-info">
                        <div className="detail-room-name-badge">{room.title}</div>
                        <button className="btn-location-detail">📍 상세 위치</button>
                    </div>
                </div>

                <div className="detail-section-label">예약 정보</div>
                <div className="detail-info-box">
                    <div>🕒 25년 10월 20일 12:00 ~14:00</div>
                    <div className="detail-user-count">👤 사용 인원: 4명</div>
                </div>

                <div className="detail-section-label">공간 설비/환경</div>
                <div className="detail-info-box">
                    <div className="fac-env-container">
                        <div className="fac-column">
                            <div className="fac-header">&lt;설비 항목&gt;</div>
                            <div className="fac-tag-wrapper">
                                <div className="fac-tag">화이트보드</div>
                                <div className="fac-tag">모니터</div>
                                <div className="fac-tag">빔프로젝트</div>
                                <div className="fac-tag">충전 콘센트</div>
                                <div className="fac-tag">와이파이</div>
                            </div>
                        </div>
                        <div className="env-column">
                            <div className="env-header">&lt;공간 환경&gt;</div>
                            <div className="env-bubble">"조용한 환경에서 집중할 수 있어요."</div>
                            <div className="env-bubble">"대화 가능한 협업형 공간이에요."</div>
                            <div className="env-bubble">"밝은 조명으로 학습에 적합해요."</div>
                        </div>
                    </div>
                </div>

                <div className="detail-section-label">예약 규정</div>
                <div className="detail-info-box">
                    <ul className="rules-list">
                        <li>1. 예약은 최대 2시간까지 가능하며, 다음 예약이 없을 경우 연장할 수 있습니다.</li>
                        <li>2. 예약 시작 30분 전까지 취소가 가능하며, 이후에는 자동 취소 처리됩니다.</li>
                        <li>3. 예약 시간 이후 10분 이상 미입실 시, 노쇼(No-Show)로 간주됩니다.</li>
                        <li>4. 노쇼 2회 누적 시 7일간 예약 이용이 제한됩니다.</li>
                        <li>5. 예약자는 반드시 본인이 입실해야 하며, 대리 이용은 제한됩니다.</li>
                        <li>6. 시설물 훼손 및 소음 발생 시 이용 제한 등의 제재가 있을 수 있습니다.</li>
                    </ul>
                </div>

                <div className="detail-action-area">
                    <button className={`btn-action-cancel ${isFromHistory ? 'btn-action-cancel-red' : 'btn-action-reserve'}`} onClick={onReserve}>
                        {isFromHistory ? '취소하기' : '예약하기'}
                    </button>
                    <div className="btn-action-row">
                        <button className="btn-action-sub">
                            <img src={ICONS.actions.share} className="action-icon" /> 공유하기
                        </button>
                        <button className="btn-action-sub">
                            <img src={ICONS.actions.starOff} className="action-icon" /> 즐겨찾기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

// 예약 성공 화면
const ReservationSuccess = ({ room, onConfirm }) => {
    return (
        <div className="app-container">
            <div className="fav-header-simple">
                <img src={ICONS.header.back} className="back-icon-img" onClick={onConfirm} />
                예약 완료
            </div>

            <div className="content detail-content-wrapper detail-content-center">
                <img src={ICONS.actions.check} className="check-icon" />
                <h2 className="success-title">예약이 완료되었습니다.</h2>
                
                <div className="detail-info-box detail-info-box-full">
                    <h3 className="detail-info-title">{room.title}</h3>
                    <div>🕒 25년 10월 20일 12:00 ~14:00</div>
                    <div>👤 사용 인원: 4명</div>
                </div>

                <div className="detail-action-area detail-action-area-full">
                    <button className="btn-action-cancel btn-action-confirm" onClick={onConfirm}>
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

// 예약 취소 완료 화면
const ReservationCanceled = ({ room, onConfirm }) => {
    return (
        <div className="app-container">
            <div className="fav-header-simple">
                <img src={ICONS.header.back} className="back-icon-img" onClick={onConfirm} />
                예약 취소
            </div>

            <div className="content detail-content-wrapper detail-content-center">
                <img src={ICONS.actions.check} className="check-icon" />
                <h2 className="success-title">예약이 취소되었습니다.</h2>
                
                <div className="detail-info-box detail-info-box-full">
                    <h3 className="detail-info-title">{room.title}</h3>
                    <div>🕒 25년 10월 20일 12:00 ~14:00</div>
                    <div>👤 사용 인원: 4명</div>
                </div>

                <div className="detail-action-area detail-action-area-full">
                    <button className="btn-action-cancel btn-action-confirm" onClick={onConfirm}>
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};



// 메인 앱
const App = () => {
    const [screen, setScreen] = React.useState('SPLASH');
    const [activeTab, setActiveTab] = React.useState('home');
    const [viewMode, setViewMode] = React.useState('list');
    const [selectedRoom, setSelectedRoom] = React.useState(null);
    const [showConfirmModal, setShowConfirmModal] = React.useState(false);
    const [isCancelMode, setIsCancelMode] = React.useState(false);
    const [showFilter, setShowFilter] = React.useState(false); 
    const [selectedTags, setSelectedTags] = React.useState(["개인 학습", "멀티 콘센트"]);
    const [historyTab, setHistoryTab] = React.useState('confirmed');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [recentSearches] = React.useState([
        "학생복지관",
        "학술정보관", 
        "소프트웨어융합대학"
    ]);
    const [favoriteRooms, setFavoriteRooms] = React.useState(
        RECENT_ROOMS.reduce((acc, room) => {
            acc[room.id] = room.isFav || false;
            return acc;
        }, {})
    );

    React.useEffect(() => {
        if(screen === 'SPLASH') setTimeout(() => setScreen('HOME'), 2000);
    }, [screen]);

    // 탭 전환
    const switchTab = (tabName) => {
        setActiveTab(tabName);
        setViewMode('list'); 
        setSelectedRoom(null);
        setShowConfirmModal(false);
    };

    // 필터 태그 토글
    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) setSelectedTags(selectedTags.filter(t => t !== tag));
        else setSelectedTags([...selectedTags, tag]);
    };

    // 상세 보기로 전환
    const goDetail = (room) => {
        setSelectedRoom(room);
        setViewMode('detail');
    };

    // 예약 버튼 클릭
    const clickReserveButton = (room) => {
        setSelectedRoom(room);
        setIsCancelMode(false);
        setShowConfirmModal(true);
    };

    // 예약 확정
    const handleRealReservation = () => {
        setShowConfirmModal(false);
        setViewMode('success');
    };

    // 예약 취소
    const handleCancelReservation = () => {
        setIsCancelMode(true);
        setShowConfirmModal(true);
    };

    // 취소 확정
    const handleRealCancel = () => {
        setShowConfirmModal(false);
        setIsCancelMode(false);
        setViewMode('canceled');
    };

    // 공통 헤더
    const CommonHeader = () => (
        <div className="header-wrapper">
            <div className="top-row">
                <div className="brand-logo">
                    <img src={ICONS.header.logo} className="icon-img logo-icon-margin"/> 
                    어디서 하냥
                </div>
                <div className="header-icons">
                    <img src={ICONS.header.bell} className="icon-img" />
                    <img src={ICONS.header.user} className="icon-img" />
                </div>
            </div>
            <div className="search-container">
                <img src={ICONS.header.menu} className="search-icon-left icon-img menu-icon-pointer" onClick={() => setShowFilter(!showFilter)} />
                <input 
                    type="text" 
                    className="search-input-fancy" 
                    placeholder="검색 내용" 
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        if (e.target.value && activeTab !== 'search') {
                            setActiveTab('search');
                        }
                    }}
                    onClick={() => {
                        setActiveTab('search');
                        setViewMode('list');
                    }}
                />
                <img src={ICONS.header.search} className="search-icon-right icon-img" />
            </div>
        </div>
    );

    // 필터 오버레이
    const GlobalFilterOverlay = () => (
        <div className="filter-overlay">
            <div className="filter-box">
                <div className="filter-title-main">세부 필터</div>
                <div className="filter-category-title">사용 목적</div>
                <div className="filter-tags-grid">
                    {TAGS_PURPOSE.map(tag => (
                        <div key={tag} className={`filter-chip-btn ${selectedTags.includes(tag)?'active':''}`} onClick={()=>toggleTag(tag)}>{tag}</div>
                    ))}
                </div>
                <div className="filter-category-title">설비 여부</div>
                <div className="filter-tags-grid">
                    {TAGS_EQUIP.map(tag => (
                        <div key={tag} className={`filter-chip-btn ${selectedTags.includes(tag)?'active':''}`} onClick={()=>toggleTag(tag)}>{tag}</div>
                    ))}
                </div>
                <div className="filter-actions-row">
                    <button className="btn-filter-reset" onClick={()=>setSelectedTags([])}>필터 초기화</button>
                    <button className="btn-filter-apply" onClick={()=>setShowFilter(false)}>적용하기</button>
                </div>
            </div>
        </div>
    );

    // 예약 확인 모달
    const ConfirmationModal = () => {
        if (!selectedRoom) return null;
        return (
            <div className="modal-overlay">
                <div className="modal-box">
                    <div className="modal-title">{isCancelMode ? '예약을 취소하시겠습니까?' : '예약 하시겠습니까?'}</div>
                    <div className="modal-sub">(유의사항 안내문)</div>
                    
                    <div className="modal-info">
                        2025.10.21 / {selectedRoom.time || selectedRoom.timeRange || "12:00"} / 4명<br/>
                        {selectedRoom.title}
                    </div>

                    <div className="modal-btn-row">
                        <button className="btn-modal-cancel" onClick={() => {
                            setShowConfirmModal(false);
                            setIsCancelMode(false);
                        }}>취소</button>
                        <button className="btn-modal-confirm" onClick={isCancelMode ? handleRealCancel : handleRealReservation}>확인</button>
                    </div>
                </div>
            </div>
        );
    };

    // 네비게이션 바
    const NavBar = () => (
        <div className="nav-bar">
            <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={()=>switchTab('home')}>
                <img src={ICONS.nav.home} className="nav-icon-img" /><span>홈</span>
            </div>
            <div className={`nav-item ${activeTab === 'search' ? 'active' : ''}`} onClick={()=>switchTab('search')}>
                <img src={ICONS.nav.search} className="nav-icon-img" /><span>공간 찾기</span>
            </div>
            <div className={`nav-item ${activeTab === 'fav' ? 'active' : ''}`} onClick={()=>switchTab('fav')}>
                <img src={ICONS.nav.fav} className="nav-icon-img" /><span>즐겨 찾기</span>
            </div>
            <div className={`nav-item ${activeTab === 'history' ? 'active' : ''}`} onClick={()=>switchTab('history')}>
                <img src={ICONS.nav.history} className="nav-icon-img" /><span>예약 내역</span>
            </div>
        </div>
    );

    // 스플래시 화면
    if(screen === 'SPLASH') {
        return (
            <div className="app-container">
                <div className="splash-screen">
                    <img src={ICONS.header.logowhite} className="splash-logo" />
                </div>
            </div>
        )
    }

    // 예약 성공 화면
    if (viewMode === 'success' && selectedRoom) {
        return <ReservationSuccess room={selectedRoom} onConfirm={() => switchTab('home')} />;
    }

    // 예약 취소 완료 화면
    if (viewMode === 'canceled' && selectedRoom) {
        return <ReservationCanceled room={selectedRoom} onConfirm={() => switchTab('history')} />;
    }

    // 상세 보기 화면
    if (viewMode === 'detail' && selectedRoom) {
        return (
            <div className="app-container">
                <DetailView 
                    room={selectedRoom} 
                    onBack={() => setViewMode('list')} 
                    onReserve={activeTab === 'history' ? () => handleCancelReservation() : () => clickReserveButton(selectedRoom)} 
                    isFromHistory={activeTab === 'history'}
                />
                {showConfirmModal && <ConfirmationModal />}
                
                <NavBar />
            </div>
        );
    }

    let tabContent;

    // 검색 탭
    if (activeTab === 'search') {
        // 검색어가 없을 때: 최근 검색 장소 표시
        if (!searchQuery.trim()) {
            tabContent = (
                <>
                    <div className="recent-search-header">
                        <div className="recent-search-title">최근 검색 장소</div>
                        <div className="recent-search-delete-all">전체 삭제</div>
                    </div>
                    <div className="recent-search-list">
                        {recentSearches.map((searchTerm, index) => (
                            <div 
                                key={index}
                                className="recent-search-item"
                                onClick={() => setSearchQuery(searchTerm)}
                            >
                                <span className="recent-search-icon">🕒</span>
                                <span className="recent-search-term">{searchTerm}</span>
                            </div>
                        ))}
                    </div>
                </>
            );
        } 
        // 검색어가 "제1공학관"일 때: 검색 결과 표시
        else if (searchQuery.includes('제1공학관')) {
            tabContent = (
                <>
                    <div className="search-section-title">
                        <span>대체 공간 추천</span>
                        <span className="sort-badge">정렬 기능</span>
                    </div>
                    {SEARCH_ALT_ROOMS.map(room => (
                        <CommonRoomCard 
                            key={room.id} 
                            room={room} 
                            type="blue" 
                            onBtn1Click={() => goDetail(room)} 
                            onBtn2Click={() => clickReserveButton(room)} 
                        />
                    ))}
                    <div className="search-section-title search-section-title-margin">
                        <span>가능한 공간 리스트</span>
                    </div>
                    <CommonRoomCard 
                        key={SEARCH_LIST_ROOMS[0].id} 
                        room={SEARCH_LIST_ROOMS[0]} 
                        type="green" 
                        onBtn1Click={() => goDetail(SEARCH_LIST_ROOMS[0])} 
                        onBtn2Click={() => clickReserveButton(SEARCH_LIST_ROOMS[0])} 
                    />
                </>
            );
        } 
        // 다른 검색어일 때
        else {
            tabContent = (
                <div className="search-no-results">
                    <div className="search-no-results-icon">🔍</div>
                    <div className="search-no-results-text">"{searchQuery}"에 대한 검색 결과가 없습니다.</div>
                </div>
            );
        }

    // 즐겨찾기 탭
    } else if (activeTab === 'fav') {
        tabContent = (
            <>
                <div className="fav-section-label">즐겨찾기</div>
                {SEARCH_ALT_ROOMS.map(room => (
                    <CommonRoomCard 
                        key={room.id} room={{...room, isFav: true}} type="blue" 
                        onBtn1Click={() => goDetail(room)} 
                        onBtn2Click={() => clickReserveButton(room)} 
                    />
                ))}
                <div className="recent-section-label">최근 사용</div>
                <div className="content-margin-top">
                    {RECENT_USAGE_DATA.map(room => (
                        <CommonRoomCard 
                            key={room.id} room={{...room, label: 'recent'}} type="green" 
                            onBtn1Click={() => goDetail(room)} 
                            onBtn2Click={() => clickReserveButton(room)} 
                        />
                    ))}
                </div>
                <button className="btn-more-wide">더 보기</button>
            </>
        );

    // 예약 내역 탭
    } else if (activeTab === 'history') {
        tabContent = (
            <>
                <div className="history-tabs">
                    <div className={`history-tab-item ${historyTab === 'confirmed' ? 'active' : ''}`} onClick={()=>setHistoryTab('confirmed')}>예약 확인</div>
                    <div className={`history-tab-item ${historyTab === 'canceled' ? 'active' : ''}`} onClick={()=>setHistoryTab('canceled')}>예약 취소</div>
                </div>
                <div className="content-inner content-inner-padding"> 
                    {historyTab === 'confirmed' ? (
                        HISTORY_CONFIRMED.map(room => (
                            <CommonRoomCard 
                                key={room.id} room={room} type="green" 
                                btn1="상세 보기" 
                                btn2={null}
                                onBtn1Click={() => goDetail(room)} 
                            />
                        ))
                    ) : (
                        <div className="empty-message">취소된 예약 내역이 없습니다.</div>
                    )}
                </div>
            </>
        );

    // 홈 탭
    } else {
        tabContent = (
            <>
                <div className="horizontal-section">
                    <div className="section-header-row"><span className="see-more">더보기</span></div>
                    <div className="horizontal-scroll">{RECENT_ROOMS.map(room => {
                        const isFav = favoriteRooms[room.id] || false;
                        return (
                            <div key={room.id} className="mini-card">
                                <div className="mini-card-img">
                                    <img src={room.image} className="mini-card-img-inner" />
                                    <img 
                                        src={isFav ? ICONS.actions.starOn : ICONS.actions.starOff} 
                                        className="mini-fav-icon mini-fav-icon-pointer" 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setFavoriteRooms(prev => ({
                                                ...prev,
                                                [room.id]: !prev[room.id]
                                            }));
                                        }}
                                    />
                                    {room.label && <div className="mini-card-label">{room.label}</div>}
                                </div>
                                <div className="mini-card-info">
                                    <div className="mini-card-title">{room.title}</div>
                                    <button className="btn-mini-reserve" onClick={() => clickReserveButton(room)}>예약하기</button>
                                </div>
                            </div>
                        );
                    })}</div>
                </div>
                <div className="date-section">
                    <div className="year-month">2025.10</div>
                    <div className="week-row">{WEEK_DAYS.map((d, i) => (<div key={i} className={`day-item ${d.isSelected ? 'selected' : ''}`}><span className={`day-name ${d.isRed?'red':''} ${d.isBlue?'blue':''}`}>{d.day}</span><span className="day-number">{d.date}</span></div>))}</div>
                </div>
                <div className="list-section">
                    {HOME_LIST_ROOMS.map(room => (
                        <div key={room.id} className="home-room-card">
                            <img src={room.image} className="home-room-img" />
                            <div className="home-room-content">
                                <div className="home-room-title">{room.title}</div>
                                <div className="home-room-time">{room.timeRange}</div>
                                <div className="home-room-detail">최대 예약 가능 시간 : {room.maxTime}</div>
                                <div className="home-room-detail">연장 가능 여부: <span className={room.extend === '불가' ? 'text-red' : room.extend === '가능' ? 'text-blue' : ''}>({room.extend})</span></div>
                                <div className="home-room-detail">노쇼 패널티 여부: <span className={room.penalty === '없음' ? 'text-red' : room.penalty === '있음' ? 'text-blue' : ''}>({room.penalty})</span></div>
                                <div className="home-room-detail">빔프로젝터 여부: <span className={room.projector === '없음' ? 'text-red' : room.projector === '있음' ? 'text-blue' : ''}>({room.projector})</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    return (
        <div className="app-container">
            <CommonHeader />
            
            <div className="content">
                {showFilter && <GlobalFilterOverlay />}
                {showConfirmModal && <ConfirmationModal />}
                {tabContent}
            </div>
            
            <NavBar />
        </div>
    );
};

// 앱 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
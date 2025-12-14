
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
        logo: "images/logo.png",
        logowhite: "images/logo_white.png"
    },
    actions: {
        starOn: "images/star_yellow.png",
        starOff: "images/star_gray.png",
        share: "https://cdn-icons-png.flaticon.com/512/1828/1828950.png",
        check: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
    }
};

// ==========================================
// 2. MASTER DATABASE (Edit Room Details Here!)
// ==========================================
// Change an image or description here, and it updates EVERYWHERE.
const ROOM_DATABASE = {
    101: {
        title: "학생복지관 3층 Exchange Box",
        image: "images/example6.png",
        capacity: "최대 5명",
        timeRange: "12:00 ~ 14:00",
        equip: "빔프로젝터 O, 멀티콘센트 O",
        // Extended details for Home List
        maxTime: "최대 2시간",
        extend: "불가",
        penalty: "없음",
        projector: "없음"
    },
    102: {
        title: "학술정보관 1층 커리어 룸",
        image: "images/example1.png",
        capacity: "최대 5명",
        timeRange: "12:00 ~ 14:00",
        equip: "빔프로젝터 O, 멀티콘센트 O",
        maxTime: "최대 3시간",
        extend: "가능",
        penalty: "없음",
        projector: "있음"
    },
    103: {
        title: "학술정보관 4층 그룹스터디룸",
        image: "images/example2.png",
        capacity: "최대 8명",
        timeRange: "12:00 ~ 16:00",
        equip: "빔프로젝터 O, 멀티콘센트 O",
        maxTime: "최대 2시간",
        extend: "가능",
        penalty: "있음",
        projector: "있음"
    },
    201: {
        title: "제1공학관 1층 해동스터디룸 4호",
        image: "images/example5.png",
        capacity: "최대 6명",
        timeRange: "10:30 ~ 12:00",
        equip: "빔프로젝터 X, 멀티콘센트 O",
        maxTime: "최대 2시간",
        extend: "불가",
        penalty: "있음",
        projector: "없음"
    },
    202: {
        title: "ERICA학술정보관 1층 커리어홀",
        image: "images/example1.png",
        capacity: "최대 10명",
        timeRange: "13:00 ~ 15:00",
        equip: "빔프로젝터 O, 멀티콘센트 O",
        maxTime: "최대 3시간",
        extend: "가능",
        penalty: "없음",
        projector: "있음"
    },
    401: {
        title: "제1공학관 105호(PBL강의실)",
        image: "images/example3.png",
        capacity: "최대 30명",
        timeRange: "13:00 ~ 18:00",
        equip: "빔프로젝터 O, 멀티콘센트 X",
        maxTime: "최대 4시간",
        extend: "불가",
        penalty: "있음",
        projector: "있음"
    },
    402: {
        title: "창업교육센터 Knowledge Bunker",
        image: "images/example4.png",
        capacity: "최대 6명",
        timeRange: "09:00 ~ 18:00",
        equip: "빔프로젝터 O, 멀티콘센트 O",
        maxTime: "최대 2시간",
        extend: "가능",
        penalty: "없음",
        projector: "있음"
    }
};

// --- HELPER: Merges Master Data with List-Specific Data ---
function createRoom(id, overrides = {}) {
    const base = ROOM_DATABASE[id];
    if (!base) {
        console.error(`Room ID ${id} not found in database.`);
        return { id, ...overrides };
    }
    // Combine base data with any overrides (like isFav)
    return {
        id: id,
        ...base,
        // Format strings if needed for display
        capacity: `수용 인원: ${base.capacity}`,
        timeRange: base.timeRange.includes('~') ? `이용 가능 시간대: ${base.timeRange}` : base.timeRange,
        equip: `장비: ${base.equip}`,
        // Raw values for Home List
        rawTime: base.timeRange, 
        ...overrides
    };
}

// ==========================================
// 3. GENERATED LISTS (Used by App)
// ==========================================

const RECENT_ROOMS = [
    createRoom(101, { isFav: false, label: "최근 검색" }),
    createRoom(102, { isFav: true, label: "최근 사용" }),
    createRoom(103, { isFav: true })
];

const HOME_LIST_ROOMS = [
    // Note: Home list uses a different time display format, so we override timeRange here if needed
    createRoom(201, { timeRange: "10:30 ~ 12:00" }),
    createRoom(202, { timeRange: "13:00 ~ 15:00" })
];

const SEARCH_ALT_ROOMS = [
    createRoom(102, { isFav: true }), // Uses ID 102 (Career Room)
    createRoom(103, { isFav: true })  // Uses ID 103 (Group Study)
];

const SEARCH_LIST_ROOMS = [
    createRoom(401, { isFav: false }),
    createRoom(402, { isFav: false })
];

const RECENT_USAGE_DATA = [
    createRoom(401, { isFav: false }),
    createRoom(402, { isFav: false })
];

const HISTORY_CONFIRMED = [
    createRoom(401, { isFav: true }),
    createRoom(402, { isFav: true })
];

// ==========================================
// 4. STATIC DATA (Filters & Dates)
// ==========================================

const WEEK_DAYS = [
    { day: "Sun", date: 20, isRed: true }, 
    { day: "Mon", date: 21, isSelected: true }, 
    { day: "Tue", date: 22 }, 
    { day: "Wed", date: 23 }, 
    { day: "Thu", date: 24 }, 
    { day: "Fri", date: 25 }, 
    { day: "Sat", date: 26, isBlue: true }
];

const TAGS_PURPOSE = ["전체", "팀 프로젝트", "개인 학습", "동아리 활동", "면접/발표 연습", "기타"];
const TAGS_EQUIP = ["화이트보드", "빔프로젝터", "모니터", "멀티 콘센트", "기타"];
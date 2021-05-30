	// 프로젝트 목록
	// 광산지리정보시스템
	// 통계청 센서스 지도 DB구축
	// 부산광역시 수치지형도 시스템
	// 행정공간정보체계 구축시스템
	// 도로명주소 위치정확도 개선사업 
	//DB구축



	// 농산어촌지역개발 공간정보시스템
	// 기초조사 정보관리 시스템
	// 춘천시 도시재생 정보분석 플랫폼
	// 춘천시 도시재생지원센터 포털시스템
	// 기초조사 정보관리 시스템 고도화 ( 작업중 )
	// 토지적성평가 검수시스템
	// 지오그라운드 (작업중)

var projectList = [
	{
		id: 'GeoSolution',
		layer: '',
		files: [],
		skil: '',
		description: '',
		part: ''
	}, { 
		id: 'land', 
		layer: 'sgg',
		files: [
			{
				filename: 'simulation.png',
				description: '토지적성평가 시뮬레이션 검토'
			}, {
				filename: 'check.png',
				description: '레이어 검수화면'
			}, {
				filename: 'manager.png',
				description: '관리자 레이어 발행'
			}
		],
		skli: 'spring, spring security,  java, javascript, postgresql, postgis, openlayers, geoserver, thymeleaf, jquery',
		description: '기존 도면으로 지자체 담당자로부터 데이터 검수 받는 방식을 시스템화하여 검수 데이터구축 후 출력이 아닌 시스템에 공간데이터를 탑재하여 웹상에서 검수 및 데이터 수정을 진행',
		part: '세팅부터 구현까지'
	}, {
		id: 'upbss_new',
		layer: '',
		files: [],
		skil: '',
		description: '',
		part: ''
	}, {
		id: 'portal',
		layer: '',
		files: [ 
			{
				filename: 'portal_manager.png',
				description: '리빙랩 등록 관리자 화면 및 관리도구'
			}
		],
		link: '',
		skil: '',
		description: '',
		part: ''
	}, {
		id: 'platform',
		layer: '',
		files: [],
		skil: '',
		description: '',
		part: ''
	}, {
		id: 'upbss',
		layer: '',
		files: [],
		skil: '',
		description: '',
		part: ''
	}, {
		id: 'raise',
		layer: '',
		files: [],
		skil: '',
		description: '',
		part: ''
	}
];
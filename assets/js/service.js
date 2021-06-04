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
		id: 'geoSolution',
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
			}, {
				filename: 'simulation.png',
				description: '토지적성평가 시뮬레이션 검토'
			}, {
				filename: 'manager.png',
				description: '관리자 레이어 발행'
			}, {
				filename: 'simulation.png',
				description: '토지적성평가 시뮬레이션 검토'
			}
		],
		skil: 'spring, security, java, javascript, openlayers, geoserver, thymeleaf, jquery, postgresql, postgis',
		description: '- 도면출력 후 지자체 담당자로부터 데이터 검수 받는 기존의 방식을 시스템화하여 검수 데이터구축 후 출력이 아닌 시스템에 공간데이터를 탑재하여 웹상에서 검수 및 데이터 수정을 진행',
		part: [
			'openlayer를 좀 더 쉽게 활용할 수 있는 라이브러리 구현',
			'검수 데이터, 시각화 데이터를 지도에 표출'
		]
	}, {
		id: 'upbss_new',
		layer: '',
		files: [],
		skil: 'spring, security, java, javascript, openlayers, geoserver, vue, postgresql, postgis',
		description: '- 지자체 도시과 담당자의 업무시스템으로써 지자체의 정보를 시각화 하고, 실시간 데이터 분석을 통해 지도상에 표출함으로써 데이터의 분포도 및 상세정보를 표출하고, 기존의 기초조사 시스템과는 달리 사용자의 참여도를 높여 다양한 데이터 분석이 가능',
		part: [
			'분석할 데이터의 모델을 웹상에서 분석프로세스를 생성하는 라이브러리 및 화면 구현' ,
			'Geoserver(opensource) 기능 모듈화(jar)',
			'분석프로세스의 데이터를 분석하여 클라이언트에 전달',
			'편입필지 연산'
		]
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
		skil: 'spring, security, java, javascript, openlayers, geoserver, thymeleaf, jquery, postgresql, postgis, babel, webpack',
		description: '',
		part: []
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
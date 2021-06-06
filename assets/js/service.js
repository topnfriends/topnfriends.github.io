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
		skil: 'spring, security, java, javascript, openlayers, geoserver, vue, postgresql, postgis',
		description: '내 맘대로 만들어가는 맵 플레이그라운드 ( 구현중 )',
		part: [ 
			'세팅부터 구현까지',
			'스타일 생성',
			'WPS 분석 모듈',
			'레이어 관련 (방행, 등록, 삭제, 수정)'
		] 
	}, 
	{ 
		id: 'land', 
		layer: 'sgg',
		files: [
			{
				filename: 'simulation.png',
				description: '토지적성평가 시뮬레이션 검토',
			}, {
				filename: 'check.png',
				description: '레이어 검수화면'
			}, {
				filename: 'manager.png',
				description: '관리자 레이어 발행'
			}, {
				filename: 'src_view.png',
				description: 'openlayer 6.5.0 모듈'
			}
		],
		skil: 'spring, security, java, javascript, openlayers, geoserver, thymeleaf, jquery, postgresql, postgis',
		link: '내부망',
		description: '- 도면출력 후 지자체 담당자로부터 데이터 검수 받는 기존의 방식을 시스템화하여 검수 데이터구축 후 출력이 아닌 시스템에 공간데이터를 탑재하여 웹상에서 검수 및 데이터 수정을 진행',
		part: [
			'openlayer를 좀 더 쉽게 활용할 수 있는 라이브러리 구현',
			'검수 데이터, 시각화 데이터를 지도에 표출'
		]
	}, {
		id: 'upbss_new',
		layer: '',
		files: [],
		skil: 'spring, security, java, javascript, openlayers, vue, postgresql, postgis',
		link: '내부망',
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
			}, {
				filename: 'portal_input_2.png',
				description: '관리자 등록화면2'
			}, {
				filename: 'portal_view_1.png',
				description: '사용자 화면1'
			}, {
				filename: 'portal_view_2.png',
				description: '도시재생센터 위치'
			}, {
				filename: 'livinglab.png',
				description: '리빙랩 템플릿 생성 모듈'
			}
		],
		link: 'https://uris.chuncheon.go.kr',
		skil: 'spring, security, java, javascript, openlayers, thymeleaf, jquery, postgresql, postgis, babel, webpack, e-chart',
		description: '',
		part: [
			'리빙랩 관리자 도구 구현 ( 설문조사, 아이디어 협업, 지표분석 등 )',
			'리빙랩 사용자 화면 구현',
			'리빙랩 컨텐츠 템플릿 생성 모듈 구현',
			'리빙랩 데이터, 차트 연계'
		]
	}, {
		id: 'platform',
		layer: '',
		files: [{
			filename: 'map-chart.png',
			description: '지도상의 데이터와 chart 연동'
		}, {
			filename: 'selectData_wfs.png',
			description: '선택된 객체의 표출'
		}],
		link: '내부망',
		skil: 'spring, security, java, javascript, openlayers, vue, postgresql, postgis, babel, webpack, e-chart',
		description: '지자체 담당자의 업무 시스템으로써, 지도상의 데이터를 표출하여 해당시의 데이터를 시각화한 시스템',
		part: [
			'chart, 지도에 표출된 데이터 연동',
			'openlayers 5.3.0 기반의 모듈 구현'
		]
	}, {
		id: 'upbss',
		layer: '',
		files: [{
			filename: 'scenario_admin.png',
			description: '관리자 시나리오 생성'
		}, {
			filename: 'scenario_view.png',
			description: '사용자 시나리오 실행'
		}, {
			filename: 'flow.png',
			description: '시나리오 생성 모듈'
		}],
		link: '내부망',
		skil: 'spring, security, java, javascript, openlayers, jsp, postgresql, postgis, babel, webpack',
		description: '지자체 도시과 담당자의 업무시스템으로써 지자체의 정보를 시각화 하고, 실시간 데이터 분석을 통해 지도상에 표출함으로써 데이터의 분포도 및 상세정보를 표출',
		part: [
			'svg기반의 scenario 생성 모듈 구현',
			'단계별 데이터 표출 모듈 구현'
		]
	}, {
		id: 'raise',
		layer: '',
		files: [{
			filename: 'raise_view1.png',
			description: '사진대전 공모전'
		}, {
			filename: 'raise_view2.png',
			description: '건축대전 공모전'
		}, {
			filename: 'raise_view3.png',
			description: '일반농산어촌사업 현황'
		}],
		link: 'https://www.raise.go.kr',
		skil: 'spring, security, java, javascript, openlayers, jsp, oracle, android, ios',
		description: '공간정보를 기반으로 농산어촌지역개발사업의 진행정보를 제공',
		part: [
			'android, ios webview 구현',
			'gcm 기반의 push 서비스, 문자발송, 메일발송 모듈 구현',
			'농산어촌 위치정보 표출',
			'공모전 사이트 구현'
		]
	}
];


var popup =  function ( url ) {
	var options = 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no';

	window.open( url, '이미지 상세보기', '_blank' );
}

var map = {
	options: {
        toggle: function ( target ) {
            var $target = $( target );

            var status = $target.hasClass( 'active-btn' );
            if ( status ) {
                $target.removeClass( 'active-btn' );
                this.hide();
            } else {
                $target.addClass( 'active-btn' );
                this.show();
            }
        },
        show: function () {
            $( '#mapOptionContainer' ).show();
        },
        hide: function () {
            $( '#mapOptionContainer' ).hide();
        }
    },

}
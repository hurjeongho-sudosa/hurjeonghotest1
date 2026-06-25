/* ==========================================================================
   SEOUL PROMOTIONAL WEBSITE - INTERACTIVE SCRIPTS (NAMSAN TOWER THEMED)
   Author: Antigravity AI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------------------
    // 1. HEADER SCROLL EFFECT
    // ---------------------------------------------------------
    const header = document.querySelector('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ---------------------------------------------------------
    // 2. MOBILE NAVIGATION MENU
    // ---------------------------------------------------------
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    };

    navToggle.addEventListener('click', toggleMenu);

    navLinkItems.forEach(item => {
        item.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ---------------------------------------------------------
    // 3. SCROLL REVEAL (FADE-IN ANIMATIONS)
    // ---------------------------------------------------------
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ---------------------------------------------------------
    // 4. INTERACTIVE TOUR GUIDE (TABS)
    // ---------------------------------------------------------
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => {
                c.classList.remove('active');
                const img = c.querySelector('.guide-visual img');
                if (img) {
                    img.style.transform = 'scale(1)';
                    setTimeout(() => {
                        img.style.transform = '';
                    }, 50);
                }
            });

            btn.classList.add('active');
            const activeContent = document.getElementById(`tab-${targetTab}`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    // ---------------------------------------------------------
    // 5. LOCKS OF LOVE - FLOATING HEART PARTICLES
    // ---------------------------------------------------------
    const locksCard = document.querySelector('.locks-card');
    
    if (locksCard) {
        locksCard.addEventListener('click', (e) => {
            const numHearts = 6;
            const rect = locksCard.getBoundingClientRect();
            
            for (let i = 0; i < numHearts; i++) {
                const heart = document.createElement('span');
                heart.classList.add('locks-heart-particle');
                heart.innerHTML = '❤';
                
                // Randomized horizontal and vertical origin inside card
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                heart.style.left = `${x}px`;
                heart.style.top = `${y}px`;
                
                // Random scale and direction speed
                const size = 0.5 + Math.random() * 1.2;
                heart.style.transform = `scale(${size})`;
                heart.style.setProperty('--rnd', Math.random().toString());
                
                locksCard.appendChild(heart);
                
                // Clean up particle after animation ends
                setTimeout(() => {
                    heart.remove();
                }, 1500);
            }
        });
    }

    // ---------------------------------------------------------
    // 6. NAMSAN TOWER AIR QUALITY LIGHTING SIMULATOR
    // ---------------------------------------------------------
    const simButtons = document.querySelectorAll('.control-btn');
    const simBoardTitle = document.querySelector('.sim-info-title');
    const simBoardDesc = document.querySelector('.sim-info-desc');
    
    const airQualityData = {
        blue: {
            title: '🔵 대기 상태: 좋음 (PM-10: 0~15 ㎍/m³)',
            desc: '서울의 미세먼지가 없는 무색무취의 완벽한 청정 상태입니다. 남산타워가 선명하고 아름다운 푸른색 조명으로 찬란하게 빛납니다. 전망대에 올라서면 인천 앞바다는 물론 개성의 송악산까지 맑게 내려다보이는 기적 같은 가시거리가 펼쳐집니다.',
            color: 'hsla(200, 100%, 50%, 1)',
            glow: 'hsla(200, 100%, 50%, 0.45)'
        },
        green: {
            title: '🟢 대기 상태: 보통 (PM-10: 16~50 ㎍/m³)',
            desc: '안심하고 야외 활동을 펼치기에 부담 없는 상쾌하고 온화한 서울의 평년 대기 상태입니다. 남산타워가 푸르른 산림과 조화롭게 어우러지는 싱그러운 초록색 조명을 투사합니다. 남산 산책로를 걸으며 힐링을 만끽하기 좋은 기분 좋은 날입니다.',
            color: 'hsla(145, 80%, 45%, 1)',
            glow: 'hsla(145, 80%, 45%, 0.45)'
        },
        yellow: {
            title: '🟡 대기 상태: 나쁨 (PM-10: 51~100 ㎍/m³)',
            desc: '상공에 미세 미립자나 황사 먼지가 유입되어 공기질이 저하된 상태입니다. 남산타워가 주황색(노란색) 조명을 점등하여 대기 현황을 신속히 전파합니다. 호흡기가 예민하신 분들은 가벼운 미스크 착용을 권장하며, 도심은 필터를 입힌 듯 오묘한 노을빛 자태를 보입니다.',
            color: 'hsla(40, 100%, 50%, 1)',
            glow: 'hsla(40, 100%, 50%, 0.45)'
        },
        red: {
            title: '🔴 대기 상태: 매우 나쁨 (PM-10: 101㎍/m³ 이상)',
            desc: '황사 경보 또는 초미세먼지 비상저감조치가 발령된 중증 먼지 안개 상태입니다. 남산타워가 붉은색 경고 조명을 밝혀 시민들에게 건강 주의 신호를 알립니다. 야외 활동을 지양하고 가급적 박물관, 동대문 디자인 플라자 등 아늑한 실내 투어 코스로의 전환을 추천합니다.',
            color: 'hsla(0, 100%, 60%, 1)',
            glow: 'hsla(0, 100%, 60%, 0.45)'
        }
    };

    simButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const state = btn.getAttribute('data-state');
            const data = airQualityData[state];
            
            if (data) {
                // Update active button state
                simButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Inject accent variables on document root
                document.documentElement.style.setProperty('--accent', data.color);
                document.documentElement.style.setProperty('--accent-glow', data.glow);
                
                // Smooth fade effect for the board
                simBoardTitle.style.opacity = '0';
                simBoardDesc.style.opacity = '0';
                
                setTimeout(() => {
                    simBoardTitle.textContent = data.title;
                    simBoardTitle.style.color = data.color;
                    simBoardDesc.textContent = data.desc;
                    
                    simBoardTitle.style.opacity = '1';
                    simBoardDesc.style.opacity = '1';
                }, 200);
            }
        });
    });

    // ---------------------------------------------------------
    // 7. SEOUL TRAVEL STYLE QUIZ
    // ---------------------------------------------------------
    const quizSlideContainer = document.querySelector('.quiz-slides');
    const quizSlides = document.querySelectorAll('.quiz-slide');
    const quizResult = document.getElementById('quiz-result');
    const progressBar = document.querySelector('.quiz-progress-bar');
    const quizHeader = document.querySelector('.quiz-header');
    
    let currentSlide = 0;
    let scores = { T: 0, M: 0, C: 0 };
    const totalQuestions = quizSlides.length;

    const updateQuizProgress = () => {
        const percentage = ((currentSlide) / totalQuestions) * 100;
        progressBar.style.width = `${percentage}%`;
    };

    const showNextSlide = () => {
        quizSlides[currentSlide].classList.remove('active');
        currentSlide++;
        
        updateQuizProgress();

        if (currentSlide < totalQuestions) {
            quizSlides[currentSlide].classList.add('active');
        } else {
            showResult();
        }
    };

    const optionButtons = document.querySelectorAll('.quiz-option-btn');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            if (category && scores.hasOwnProperty(category)) {
                scores[category]++;
            }
            showNextSlide();
        });
    });

    window.resetQuiz = () => {
        scores = { T: 0, M: 0, C: 0 };
        currentSlide = 0;
        updateQuizProgress();
        
        quizResult.classList.remove('active');
        quizHeader.style.display = 'block';
        quizSlideContainer.style.display = 'block';
        
        quizSlides.forEach(slide => slide.classList.remove('active'));
        quizSlides[0].classList.add('active');
    };

    const showResult = () => {
        quizSlideContainer.style.display = 'none';
        quizHeader.style.display = 'none';
        progressBar.style.width = '100%';

        let dominant = 'T';
        if (scores.M >= scores.T && scores.M >= scores.C) {
            dominant = 'M';
        } else if (scores.C >= scores.T && scores.C >= scores.M) {
            dominant = 'C';
        }

        const resultsData = {
            T: {
                badge: '🏯 역사와 전통의 탐험가 (Heritage Explorer)',
                title: '과거와 호흡하는 시간 여행 코스',
                desc: '조선 왕조의 위엄 어린 궁궐과 고즈넉한 북촌 한옥마을을 걸으며 깊은 역사와 전통의 향기를 느끼는 클래식 서울 여행 스타일입니다.',
                timeline: [
                    { time: '10:00', title: '경복궁 & 수문장 교대의식', desc: '아름다운 흥례문 앞에서 웅장하게 펼쳐지는 수문장 교대의식을 관람하고, 경회루의 수려한 경치를 감상합니다.' },
                    { time: '13:00', title: '인사동 전통 맛집 & 전통 찻집', desc: '골목 구석구석 정겨운 갤러리와 골동품점을 둘러보고, 깊은 대추차 한 잔과 개성 가득한 한식을 즐깁니다.' },
                    { time: '15:30', title: '북촌 한옥마을 느리게 걷기', desc: '실제 주민들이 거주하는 아름다운 기와집 골목길을 거닐며 전통 한옥의 선과 마당이 주는 고요를 체험합니다.' },
                    { time: '19:00', title: '낙산공원 & 한양도성 야경', desc: '도심 속을 둘러싼 은은한 한양도성 성곽길을 따라 오르면 밤하늘 빛나는 서울 시내가 한눈에 펼쳐집니다.' }
                ]
            },
            M: {
                badge: '⚡ 트렌디 라이프스타일러 (Modern & Trend)',
                title: '최첨단 미래와 트렌디한 도심 코스',
                desc: '초현대적인 디자인의 랜드마크를 배경으로 세계적인 쇼핑, 패션, 그리고 트렌디한 성수동 카페 골목을 정복하는 서울 매니아 스타일입니다.',
                timeline: [
                    { time: '10:30', title: '동대문 디자인 플라자 (DDP)', desc: '자하 하디드가 설계한 우주선 모양의 비정형 건축물을 둘러보고 감각적인 디자인 전시와 숍을 관람합니다.' },
                    { time: '13:00', title: '성수동 수제화 거리 & 루프탑 점심', desc: '버려진 공장을 힙한 팝업스토어와 예술 스튜디오로 개조한 성수동에서 힙하고 트렌디한 수제 피자와 파스타를 경험합니다.' },
                    { time: '15:30', title: '성수 아틀리에 & 편집숍 투어', desc: '글로벌 브랜드의 감각적인 컨셉 스토어와 개성 넘치는 로컬 디자인 브랜드 숍에서 서울의 진짜 트렌드를 쇼핑합니다.' },
                    { time: '20:00', title: 'N서울타워 & 명동 쇼핑', desc: '남산 케이블카를 타고 올라가 화려한 레이저 쇼와 타워 전망대에서 360도로 펼쳐지는 황홀한 서울의 시티뷰를 감상합니다.' }
                ]
            },
            C: {
                badge: '🥢 소울 푸드 & 로컬 크리에이터 (K-Food & Culture)',
                title: '로컬 맛과 멋에 취하는 문화 힐링 코스',
                desc: '한강 피크닉의 낭만부터 떠들썩한 길거리 푸드 마켓, 그리고 생동감 넘치는 K-컬처를 온몸으로 흡수하고 영감을 채우는 미식가 스타일입니다.',
                timeline: [
                    { time: '11:00', title: '광장시장 먹방 투어', desc: '소문난 육회 비빔밥, 갓 부쳐내어 바삭하고 두툼한 녹두빈대떡, 쫄깃한 마약김밥으로 오감을 깨우는 미식 체험을 시작합니다.' },
                    { time: '14:30', title: '여의도 한강공원 & 자전거 타기', desc: '은빛 물결이 출렁이는 한강변에서 따릉이(서울 공공자전거)를 타고 선선한 강바람을 쐬며 자유를 만끽합니다.' },
                    { time: '17:30', title: '한강 편의점 한강라면 피크닉', desc: '잔디밭에 돗자리를 펴고, 즉석 라면 조리기로 끓인 얼큰한 라면과 달콤한 닭강정을 먹으며 로컬 피크닉을 즐깁니다.' },
                    { time: '20:00', title: '홍대 길거리 공연 & 라이브 클럽', desc: '버스킹의 성지 홍대 골목에서 재능 넘치는 아티스트들의 생생한 공연을 직관하고 낭만 가득하게 하루를 마무리합니다.' }
                ]
            }
        };

        const result = resultsData[dominant];

        const resultBadge = quizResult.querySelector('.result-badge');
        const resultTitle = quizResult.querySelector('.result-title');
        const resultDesc = quizResult.querySelector('.result-desc');
        const timelineContainer = quizResult.querySelector('.itinerary-timeline');

        resultBadge.textContent = result.badge;
        resultTitle.textContent = result.title;
        resultDesc.textContent = result.desc;

        if (dominant === 'T') {
            resultBadge.style.color = 'var(--aura-yellow)';
            resultBadge.style.borderColor = 'var(--aura-yellow)';
            resultBadge.style.background = 'rgba(251, 197, 49, 0.15)';
        } else if (dominant === 'M') {
            resultBadge.style.color = 'var(--primary)';
            resultBadge.style.borderColor = 'var(--primary)';
            resultBadge.style.background = 'rgba(255, 77, 109, 0.15)';
        } else {
            resultBadge.style.color = 'var(--aura-blue)';
            resultBadge.style.borderColor = 'var(--aura-blue)';
            resultBadge.style.background = 'rgba(0, 168, 255, 0.15)';
        }

        timelineContainer.innerHTML = '';
        result.timeline.forEach(step => {
            const stepHtml = `
                <div class="itinerary-step">
                    <div class="itinerary-time" style="color: ${dominant === 'T' ? 'var(--aura-yellow)' : dominant === 'M' ? 'var(--primary)' : 'var(--aura-blue)'}">${step.time}</div>
                    <div class="itinerary-detail">
                        <h5>${step.title}</h5>
                        <p>${step.desc}</p>
                    </div>
                </div>
            `;
            timelineContainer.insertAdjacentHTML('beforeend', stepHtml);
        });

        quizResult.classList.add('active');
    };
});

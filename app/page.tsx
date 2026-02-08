export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* ───── Hero ───── */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-32 sm:pt-48 sm:pb-40 text-center overflow-hidden">
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-50 dark:opacity-30" />
        <div className="hero-orb animate-fade-in-slow" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="inline-block rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
              High Momentum Product Group
            </span>
          </div>

          <h1 className="mt-8 text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] animate-fade-in-up-1">
            <span className="gradient-text">HMPG</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed animate-fade-in-up-2">
            직접 겪은 불편함에서 시작합니다.
            <br className="hidden sm:block" />
            1인 개발자와 메이커를 위한 프로덕트 그룹.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              프로덕트 보기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="mailto:contact@hmpglab.com"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ───── Manifesto ───── */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-snug">
            필요한 도구를
            <br />
            <span className="accent-gradient-text">기다리지 않고, 직접 만듭니다.</span>
          </h2>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            프로덕트를 만들고, 런칭하고, 마케팅까지 혼자 해야 하는 1인 개발자.
            <br className="hidden sm:block" />
            그 과정에서 겪는 불편함을 해결하는 도구를 직접 만들고 공유합니다.
          </p>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ───── Philosophy ───── */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Philosophy
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              우리가 믿는 것
            </h2>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M12 20h9" />
                  <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold">직접 쓰는 도구</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                우리가 매일 쓰는 도구를 만듭니다. 내가 겪은 불편함이 곧 제품의 출발점입니다.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold">작게, 빠르게</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                거대한 계획보다 빠른 실행. MVP를 만들고, 실제 데이터로 개선합니다.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M12 8V4H8" />
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                  <path d="m7 17 2-2-2-2" />
                  <path d="M14 15h2" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold">AI-Native</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                반복 작업은 AI에게. 사람은 창의적인 결정에 집중합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ───── How We Build ───── */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Process
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              이렇게 만듭니다
            </h2>
          </div>

          <div className="mt-20 grid gap-12 sm:gap-6 sm:grid-cols-4">
            {/* Step 1 */}
            <div className="relative text-center sm:text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold text-muted-foreground">
                1
              </div>
              <div className="hidden sm:block absolute top-5 left-12 right-0 h-px bg-gradient-to-r from-border to-transparent" />
              <h3 className="mt-5 text-base font-semibold">불편함 발견</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                직접 프로덕트를 만들며 반복적으로 겪는 문제를 포착합니다.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center sm:text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold text-muted-foreground">
                2
              </div>
              <div className="hidden sm:block absolute top-5 left-12 right-0 h-px bg-gradient-to-r from-border to-transparent" />
              <h3 className="mt-5 text-base font-semibold">빠르게 설계</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                핵심 기능만 담은 MVP를 설계합니다. 완벽보다 속도를 우선합니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center sm:text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold text-muted-foreground">
                3
              </div>
              <div className="hidden sm:block absolute top-5 left-12 right-0 h-px bg-gradient-to-r from-border to-transparent" />
              <h3 className="mt-5 text-base font-semibold">출시 &amp; 검증</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                실제 사용자에게 공개하고, 데이터로 가설을 검증합니다.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center sm:text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 text-sm font-bold text-accent">
                &#8734;
              </div>
              <h3 className="mt-5 text-base font-semibold">데이터로 반복</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                사용 패턴과 피드백을 기반으로 끊임없이 개선합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ───── Products ───── */}
      <section id="products" className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Products
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              우리가 만드는 것
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
              매일 쓰면서 다듬는 도구들. 우리가 먼저 쓰고, 검증된 것만 공개합니다.
            </p>
          </div>

          <div className="mt-20 space-y-6">
            {/* Threadytics — Live */}
            <div className="glass-card group relative rounded-2xl overflow-hidden transition-all duration-300">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-background">
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Threadytics</h3>
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Live
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-md">
                      Threads 콘텐츠 아카이빙 &amp; 분석 도구.
                      <br />
                      흩어진 게시물을 한 곳에서 관리하세요.
                    </p>

                    {/* Feature list */}
                    <ul className="mt-8 space-y-3">
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        게시물 자동 아카이빙 &amp; 동기화
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Google Sheets &amp; Notion 자동 내보내기
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        조회수, 좋아요, 리포스트 지표 추적
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://threadytics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    방문하기
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Coming Soon Products */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* AI Landing Agent */}
              <div className="glass-card group relative rounded-2xl p-8 sm:p-10 transition-all duration-300 overflow-hidden">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <path d="M12 8V4H8" />
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M2 12h20" />
                        <path d="M12 2v20" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold">AI 랜딩페이지 에이전트</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    기획부터 제작, 데이터 기반 전환율 최적화까지.
                    AI가 랜딩페이지의 전체 라이프사이클을 함께합니다.
                  </p>
                </div>
              </div>

              {/* Marketing SaaS */}
              <div className="glass-card group relative rounded-2xl p-8 sm:p-10 transition-all duration-300 overflow-hidden">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <path d="M8.59 13.51l6.83 3.98" />
                        <path d="M15.41 6.51l-6.82 3.98" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold">1인 개발자 마케팅 툴</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    코드는 잘 짜는데 마케팅은 막막할 때.
                    SEO, 소셜, 이메일을 하나의 대시보드에서.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ───── For Who ───── */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              For Makers
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              이런 분들을 위해 만듭니다
            </h2>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="text-2xl">&#128187;</div>
              <h3 className="mt-5 text-base font-semibold">1인 개발자</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                기획, 개발, 디자인, 마케팅을 혼자 하고 있는 인디 해커.
                시간을 아껴주는 도구가 필요합니다.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="text-2xl">&#9997;&#65039;</div>
              <h3 className="mt-5 text-base font-semibold">콘텐츠 크리에이터</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                SNS에 꾸준히 글을 쓰지만, 데이터는 플랫폼에 흩어져 있는 크리에이터.
                콘텐츠를 체계적으로 관리하고 싶습니다.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="text-2xl">&#128640;</div>
              <h3 className="mt-5 text-base font-semibold">사이드 프로젝트 빌더</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                아이디어는 많은데 실행이 느려서 답답한 빌더.
                런칭까지의 거리를 줄여주는 도구를 찾고 있습니다.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="text-2xl">&#128200;</div>
              <h3 className="mt-5 text-base font-semibold">그로스에 진심인 메이커</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                만드는 것만큼 성장도 중요한 메이커.
                데이터 기반으로 의사결정하고 싶습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-glow" />

      {/* ───── CTA ───── */}
      <section className="relative px-6 py-28 sm:py-36 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            다음 프로덕트가 궁금하다면
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            새로운 도구를 출시할 때 가장 먼저 알려드립니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@hmpglab.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              contact@hmpglab.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="divider-glow">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold">HMPG</span>
              <a
                href="https://threadytics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Threadytics
              </a>
              <a
                href="mailto:contact@hmpglab.com"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} HMPG
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

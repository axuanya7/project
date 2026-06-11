const projects = [
  {
    title: 'YJWJ 脚本',
    icon: '🎮',
    tags: ['Cloudflare'],
    live: true,
    shortDesc: '永劫无间罗技 Lua 脚本售卖电商平台，60 个接口文件、约 9700 行后端代码。',
    tech: 'CF Pages Functions + D1 + R2 | 前端原生 HTML/CSS/JS SPA',
    demo: 'https://yjwjscript.axuanya.xyz/',
    details: [
      '独立开发的全栈电商平台，包含 <strong>60 个接口文件</strong>、约 9700 行后端代码',
      '<strong>手写 JWT 认证</strong>：基于 Web Crypto API 实现 HMAC-S256 签名验证，自定义 base64url 编解码，无第三方依赖',
      '实现<strong>全局限流系统</strong>：基于 D1 的分布式限流，跨边缘节点全局一致',
      '设计<strong>反馈墙权限矩阵</strong>：多状态审核流水线，服务端 SQL 层过滤实现精细化内容可见性控制',
      '实现<strong>GBK 编码兼容</strong>：自动检测中文浏览器的 GBK 编码 URL，UTF-8 → GBK 回退链',
      '使用 <code>context.waitUntil()</code> 实现<strong>非阻塞心跳</strong>追踪，实时统计在线用户',
    ],
  },
  {
    title: '恋爱空间',
    icon: '💕',
    tags: ['Cloudflare'],
    live: true,
    shortDesc: '情侣纪念网站，记录恋爱点滴，支持相册、纪念日、留言板等功能。',
    tech: 'CF Pages Functions + D1 + R2 | 前端原生 HTML/CSS/JS',
    demo: 'https://love-space.axuanya.xyz/',
    details: [
      '独立开发的情侣纪念网站，支持<strong>相册管理、纪念日倒计时、留言板互动</strong>等核心功能',
      '基于 CF Pages Functions + D1 + R2 的<strong>全无服务器架构</strong>，零运维成本',
      '站点配置以 JSON 存储在 D1 <code>site_content</code> 表中，支持后台动态修改',
      '图片资源存储于 <strong>R2 对象存储</strong>，通过 Cloudflare CDN 全球加速分发',
      '7 个前端页面共用 <code>common.js</code> 统一管理导航、鉴权、弹窗等公共逻辑',
      '响应式设计，适配桌面端与移动端',
    ],
  },
  {
    title: '心灵树洞',
    icon: '🌳',
    tags: ['Node.js', 'Cloudflare'],
    live: true,
    shortDesc: '匿名校园社交平台，30+ API、5 大版块、管理后台与内容审核系统。',
    tech: 'Node.js + Express + MySQL → CF Pages Functions + D1 + R2 | 前端原生 HTML/CSS/JS SPA',
    demo: 'https://treehole.axuanya.xyz/',
    details: [
      '独立开发的全栈匿名社交平台，包含 <strong>30+ API 接口</strong>、5 大论坛版块、管理后台、内容审核系统',
      '完成<strong>架构迁移</strong>：将 Express + MySQL 单体应用完整迁移至 Cloudflare Pages 无服务器架构',
      '自研<strong>构建工具链</strong>：编写 build-functions.js，实现依赖图解析与代码内联，解决 CF Pages Functions 不支持跨文件导入的限制',
      '设计<strong>多层反机器人系统</strong>：设备指纹、注册频率限制、行为分析、账号名模式拦截',
      '实现<strong>内容审核工作流</strong>：两级封禁系统支持定时自动解封；可配置帖子审核机制',
      '前端纯原生实现 SPA 架构，约 <strong>3200 行</strong>代码',
    ],
  },
  {
    title: '12306 极速抢票',
    icon: '🚄',
    tags: ['Python', 'Tool'],
    live: false,
    shortDesc: '12306 火车票自动抢票脚本，Selenium 驱动 Edge 浏览器，自动扫码登录、查询余票、提交订单。',
    tech: 'Python + Selenium + Edge WebDriver + PyInstaller',
    details: [
      '<strong>JS 注入优先</strong>：核心逻辑全部通过 execute_script 直接注入浏览器执行，避免 Selenium 元素定位的延迟与不稳定',
      '实现<strong>两轮搜索策略</strong>：主车站组合优先搜索，无票后自动切换备选车站组合，最大化出票概率',
      '设计<strong>车次/座位优先级系统</strong>：支持指定车次优先、座位类型优先，同时保留自动降级到任意有票车次',
      '<strong>反检测处理</strong>：禁用 Edge 自动化特征标志，登录时清除所有代理环境变量，模拟真实用户行为',
      '弹窗<strong>自动处理流水线</strong>：学生票确认、折扣确认、提交确认等多类弹窗全自动识别与点击',
      '打包为<strong>零依赖 Windows 可执行文件</strong>（PyInstaller），内置 Edge WebDriver，开箱即用',
    ],
  },
  {
    title: '去水印工具',
    icon: '💧',
    tags: ['Python', 'Tool'],
    live: false,
    shortDesc: '社交平台视频/图片去水印工具，支持抖音、快手、豆包等平台。',
    tech: 'Python + Flask + Playwright + OpenCV + PyInstaller | 前端原生 HTML/CSS/JS + hls.js',
    details: [
      '独立开发的 Web 应用，支持<strong>抖音、快手</strong>等平台无水印解析与下载',
      '设计<strong>解析器架构</strong>：抽象 BaseParser 基类，各平台解析器独立实现，新增平台只需新增一个文件',
      '实现<strong>7 层回退策略</strong>（GraphQL → Apollo 缓存 → React Fiber → 正则提取等），确保平台更新后仍可用',
      'Playwright <strong>反检测爬虫</strong>：隐藏 webdriver、模拟浏览器指纹、移动端 UA 伪装',
      '<strong>纯 Python HLS 合并</strong>：解析 m3u8、下载 TS 分片、拼接 MP4，无需 ffmpeg',
      '打包为<strong>零依赖 Windows 可执行文件</strong>（PyInstaller）',
    ],
  },
  {
    title: '罗技 Lua 脚本自动化框架',
    icon: '⚙️',
    tags: ['Lua'],
    live: false,
    shortDesc: 'Logitech GHUB/LGS 脚本引擎上的可复用中断安全自动化框架。',
    tech: 'Lua（Logitech GHUB/LGS 脚本引擎）',
    details: [
      '设计<strong>中断安全架构</strong>：SmartSleep、SmartKey、IsAllowed，解决 Sleep 不可中断、OnEvent 不可重入的限制',
      '实现<strong>断点续跑状态机</strong>：在无协程环境中，通过整型断点变量 + 条件分支实现暂停/恢复',
      '解决 <strong>PlayMacro 同步问题</strong>：识别异步宏执行的时序漂移，毫秒级精度计时',
      '构建<strong>多分辨率坐标转换系统</strong>：8 种分辨率/缩放组合的自动转换',
      '<strong>事件驱动回调架构</strong>：统一 OnEvent 分发层，条件触发、优先级队列、防抖/节流',
      '<strong>可复用配置层</strong>：热键映射、延迟参数、坐标预设集中声明，单文件切换行为',
    ],
  },
]

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flexShrink: 0,
        }}>
          {project.icon}
        </div>
        <div style={{ fontSize: 19, fontWeight: 700, color: 'rgba(0,0,0,0.78)' }}>
          {project.title}
        </div>
        <div style={{ display: 'flex', gap: 6, marginLeft: 'auto' }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              fontSize: 11, fontWeight: 600, padding: '2px 9px', borderRadius: 7,
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(0,0,0,0.5)', letterSpacing: '0.02em',
            }}>
              {t}
            </span>
          ))}
          {project.live && (
            <span style={{
              fontSize: 11, fontWeight: 600, padding: '2px 9px', borderRadius: 7,
              background: 'rgba(52,199,89,0.15)', border: '1px solid rgba(52,199,89,0.3)',
              color: '#1a7d36', letterSpacing: '0.02em',
            }}>
              Live
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)', marginBottom: 15, lineHeight: 1.6 }}>
        {project.shortDesc}
      </p>

      {/* Tech */}
      <div style={{
        fontSize: 12, fontWeight: 500, color: 'rgba(0,0,0,0.4)',
        padding: '9px 13px', background: 'rgba(255,255,255,0.08)',
        borderRadius: 9, border: '1px solid rgba(255,255,255,0.12)',
        marginBottom: 18, display: 'inline-block',
      }}>
        {project.tech}
      </div>

      {/* Details */}
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: 16 }}>
        {project.details.map((d, i) => (
          <li key={i} style={{
            fontSize: 14, color: 'rgba(0,0,0,0.6)', lineHeight: 1.7,
            padding: '5px 0 5px 20px', position: 'relative',
          }}>
            <span style={{
              position: 'absolute', left: 0, top: 14, width: 4, height: 4,
              borderRadius: '50%', background: 'rgba(102,126,234,0.5)',
            }} />
            <span dangerouslySetInnerHTML={{ __html: d }} />
          </li>
        ))}
      </ul>

      {/* Live Demo Button */}
      {project.demo && (
        <div className="card-actions">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
            Live Demo
          </a>
        </div>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #e8dff5 0%, #dce8f5 40%, #f0e4e8 100%)',
      fontFamily: '"Inter", "Avenir Next", "Helvetica Neue", system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      color: 'rgba(0,0,0,0.78)',
    }}>
      <div style={{ maxWidth: 1452, margin: '0 auto', padding: '58px 29px 97px' }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 48, padding: '0 4px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            <img
              src="/头像.png"
              alt="avatar"
              style={{
                width: 48, height: 48, borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 16px rgba(102,126,234,0.3)',
              }}
            />
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'rgba(0,0,0,0.78)' }}>林宇轩</div>
              <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>Full-Stack Developer</div>
            </div>
          </div>
          <a
            href="https://github.com/axuanya7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 15, fontWeight: 600, color: 'rgba(0,0,0,0.55)',
              textDecoration: 'none', padding: '10px 22px', borderRadius: 10,
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(12px)', transition: 'all 0.2s',
            }}
          >
            GitHub
          </a>
        </div>

        {/* Project Grid */}
        <div className="project-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', padding: '26px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
          Crafted by axuanya7
        </div>
      </div>
    </div>
  )
}

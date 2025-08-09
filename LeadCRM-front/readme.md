# Vue结构与SpringBoot结构类比

| Vue 前端文件       | 对应 Spring Boot 概念                                       | 说明                                          |
| -------------- | ------------------------------------------------------- |---------------------------------------------|
| index.html     | public/index.html（静态资源入口）或 templates/\*.html（模板）        | 应用的最外层容器 / 页面入口，相当于 “网页的外壳”。                |
| main.js        | SpringApplication.run (...) + @SpringBootApplication 主类 | 应用的启动类 / 入口点，负责初始化并启动整个应用。                  |
| App.vue        | Application Configuration 或 Controller 的根路由组件           | 应用的根组件 / 主控制器，承载整个前端页面结构和逻辑。                |
| src/router     | Spring MVC 路由配置（@RequestMapping 等注解）                    | 负责页面路由跳转（前端）与接口路径映射（后端），管理请求的分发逻辑。          |
| src/store      | 后端缓存（Redis）+ 会话管理（Session）                              | 用于存储全局状态（前端）或共享数据（后端），维持应用的状态一致性。           |
| src/components | 自定义 Spring Bean 或工具类（Utils）                             | 可复用的功能模块，前端为 UI 组件，后端为业务逻辑或工具方法封装。          |
| src/views      | Controller + Service 层（业务页面 / 接口）                       | 承载具体业务逻辑，前端为页面视图，后端为接口处理与业务逻辑实现。            |
| src/api        | RestTemplate / FeignClient（接口调用）                        | 负责前后端数据交互，前端通过 Axios 调用接口，后端通过客户端调用外部服务。    |
| package.json   | pom.xml（Maven 依赖配置）                                     | 管理项目依赖、脚本命令（前端）或依赖坐标、构建配置（后端）。              |
| vite.config.js | application.properties / application.yml                | 项目构建配置（前端）或应用参数配置（后端），如端口、路径、插件等。           |


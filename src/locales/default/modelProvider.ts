export default {
  anthropic: {
    endpoint: {
      desc: '除默认地址外，必须包含 http(s)://',
      placeholder: 'https://api.anthropic.com',
      title: 'API 代理地址',
    },
    title: 'Anthropic',
    token: {
      desc: '填入来自 Anthropic 的 API Key',
      placeholder: 'Anthropic API Key',
      title: 'API Key',
    },

    unlock: {
      description: '输入你的 Anthropic API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 Anthropic API Key',
    },
  },
  azure: {
    azureApiVersion: {
      desc: 'Azure 的 API 版本，遵循 YYYY-MM-DD 格式，查阅[最新版本](https://learn.microsoft.com/zh-cn/azure/ai-services/openai/reference#chat-completions)',
      fetch: '获取列表',
      title: 'Azure Api Version',
    },
    empty: '请输入模型 ID 添加第一个模型',
    endpoint: {
      desc: '从 Azure 门户检查资源时，可在“密钥和终结点”部分中找到此值',
      placeholder: 'https://docs-test-001.openai.azure.com',
      title: 'Azure API 地址',
    },
    modelListPlaceholder: '请选择或添加你部署的 OpenAI 模型',
    title: 'Azure OpenAI',
    token: {
      desc: '从 Azure 门户检查资源时，可在“密钥和终结点”部分中找到此值。 可以使用 KEY1 或 KEY2',
      placeholder: 'Azure API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的 Azure OpenAI API Key 即可开始会话',
      title: '使用自定义 Azure OpenAI API Key',
    },
  },
  bedrock: {
    accessKeyId: {
      desc: '填入AWS Access Key Id',
      placeholder: 'AWS Access Key Id',
      title: 'AWS Access Key Id',
    },
    checker: {
      desc: '测试 AccessKeyId / SecretAccessKey 是否填写正确',
    },
    region: {
      desc: '填入 AWS Region',
      placeholder: 'AWS Region',
      title: 'AWS Region',
    },
    secretAccessKey: {
      desc: '填入 AWS Secret Access Key',
      placeholder: 'AWS Secret Access Key',
      title: 'AWS Secret Access Key',
    },
    title: 'Bedrock',
    unlock: {
      customRegion: '自定义服务区域',
      description:
        '输入你的 AWS AccessKeyId / SecretAccessKey 即可开始会话。应用不会记录你的鉴权配置',
      title: '使用自定义 Bedrock 鉴权信息',
    },
  },
  google: {
    endpoint: {
      desc: '除默认地址外，必须包含 http(s)://',
      placeholder: 'https://generativelanguage.googleapis.com',
      title: 'API 代理地址',
    },
    title: 'Google',
    token: {
      desc: '填入来自 Google 的 API Key',
      placeholder: 'Google API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的 Google API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 Google API Key',
    },
  },
  groq: {
    title: 'Groq',
    token: {
      desc: '填入来自 Groq 的 API Key',
      placeholder: 'Groq API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的 Groq API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 Groq API Key',
    },
  },
  mistral: {
    title: 'Mistral AI',
    token: {
      desc: '填入来自 Mistral AI 的 API Key',
      placeholder: 'Mistral AI API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的 Mistral AI API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 Mistral AI API Key',
    },
  },
  moonshot: {
    title: 'Moonshot AI',
    token: {
      desc: '填入来自 Moonshot AI 的 API Key',
      placeholder: 'Moonshot AI API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的 Moonshot AI API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 Moonshot AI API Key',
    },
  },
  ollama: {
    checker: {
      desc: '测试代理地址是否正确填写',
    },
    customModelName: {
      desc: '增加自定义模型，多个模型使用逗号（,）隔开',
      placeholder: 'vicuna,llava,codellama,llama2:13b-text',
      title: '自定义模型名称',
    },
    endpoint: {
      desc: '填入 Ollama 接口代理地址，本地未额外指定可留空',
      placeholder: 'http://127.0.0.1:11434',
      title: '接口代理地址',
    },
    setup: {
      cors: {
        description: '因浏览器安全限制，你需要为 Ollama 进行跨域配置后方可正常使用。',
        linux: {
          env: '在 [Service] 部分下添加 `Environment`，添加 OLLAMA_ORIGINS 环境变量：',
          reboot: '重载 systemd 并重启 Ollama',
          systemd: '调用 systemd 编辑 ollama 服务：',
        },
        macos: '请打开「终端」应用程序，并粘贴以下指令，并按回车运行',
        reboot: '请在执行完成后重启 Ollama 服务',
        title: '配置 Ollama 允许跨域访问',
        windows:
          '在 Windows 上，点击「控制面板」，进入编辑系统环境变量。为您的用户账户新建名为 「OLLAMA_ORIGINS」 的环境变量，值为 * ，点击 「OK/应用」 保存',
      },
      install: {
        description: '请确认你已经开启 Ollama ，如果没有下载 Ollama ，请前往官网下载',
        docker:
          '如果你更倾向于使用 Docker，Ollama 也提供了官方 Docker 镜像，你可以通过以下命令拉取：',
        linux: {
          command: '通过以下命令安装：',
          manual: '或者，你也可以参考 <1>Linux 手动安装指南</1> 自行安装',
        },
        macos: '<0>下载 macOS 版 Ollama</0>，解压并安装',
        title: '在本地安装并开启 Ollama 应用',
        windows: '<0>下载 Windows 版 Ollama</0>，解压并安装',
        windowsTab: 'Windows (预览版)',
      },
    },
    title: 'Ollama',
  },
  openai: {
    endpoint: {
      desc: '除默认地址外，必须包含 http(s)://',
      placeholder: 'https://api.openai.com/v1',
      title: '接口代理地址',
    },
    title: 'OpenAI',
    token: {
      desc: '使用自己的 OpenAI Key',
      placeholder: 'OpenAI API Key',
      title: 'OpenAI API Key',
    },
    unlock: {
      description: '输入你的 OpenAI API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 OpenAI API Key',
    },
  },
  openrouter: {
    checker: {
      desc: '测试代理地址是否正确填写',
    },
    customModelName: {
      desc: '增加自定义模型，多个模型使用逗号（,）隔开',
      placeholder: 'mistralai/mistral-7b-instruct:free,openchat/openchat-7b:free',
      title: '自定义模型名称',
    },
    title: 'OpenRouter',
    token: {
      desc: '填入来自 OpenRouter AI 的 API Key',
      placeholder: 'OpenRouter AI API Key',
      title: 'API Key',
    },

    unlock: {
      description: '输入你的 OpenRouter API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 OpenRouter API Key',
    },
  },
  perplexity: {
    title: 'Perplexity',
    token: {
      desc: '填入来自 Perplexity AI 的 API Key',
      placeholder: 'Perplexity AI API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的 Perplexity API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 Perplexity API Key',
    },
  },
  togetherai: {
    checker: {
      desc: '测试代理地址是否正确填写',
    },
    customModelName: {
      desc: '增加自定义模型，多个模型使用逗号（,）隔开',
      placeholder: 'togethercomputer/Llama-2-7B-32K-Instruct,teknium/OpenHermes-2-Mistral-7B',
      title: '自定义模型名称',
    },
    title: 'TogetherAI',
    token: {
      desc: '填入来自 TogetherAI AI 的 API Key',
      placeholder: 'TogetherAI AI API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的 TogetherAI API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 TogetherAI API Key',
    },
  },
  zeroone: {
    title: '01.AI 零一万物',
    token: {
      desc: '填入来自 01.AI 零一万物的 API Key',
      placeholder: '01.AI 零一万物 API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的零一万物 API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义零一万物 API Key',
    },
  },
  zhipu: {
    title: '智谱',
    token: {
      desc: '填入来自智谱的 API Key',
      placeholder: 'Zhipu API Key',
      title: 'API Key',
    },
    unlock: {
      description: '输入你的 Zhipu API Key 即可开始会话。应用不会记录你的 API Key',
      title: '使用自定义 Zhipu API Key',
    },
  },
};

/*
 * @Author: codeAdaw 18810539364@sina.cn
 * @Date: 2024-05-08 18:33:02
 * @LastEditors: codeAdaw 18810539364@sina.cn
 * @LastEditTime: 2024-05-21 22:14:46
 * @FilePath: /netofficial/next.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
          config.resolve.alias.canvas = false;
        
          return config;
     },
};

export default nextConfig;

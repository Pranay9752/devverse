uniform float time;
uniform vec3 color;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vec2 center = vec2(0.5, 0.5);
    float dist = length(vUv - center);
    
    // Create the black hole effect
    float blackHoleRadius = 0.2;
    float accretionDiskRadius = 0.4;
    
    // Black hole core
    if (dist < blackHoleRadius) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }
    
    // Accretion disk
    if (dist < accretionDiskRadius) {
        float intensity = smoothstep(blackHoleRadius, accretionDiskRadius, dist);
        vec3 diskColor = mix(vec3(0.5, 0.0, 1.0), vec3(1.0, 0.5, 1.0), intensity);
        float glow = pow(1.0 - dist / accretionDiskRadius, 4.0);
        gl_FragColor = vec4(diskColor * glow, 1.0);
        return;
    }
    
    // Outer glow
    float glow = pow(1.0 - dist, 2.0);
    vec3 glowColor = vec3(0.3, 0.0, 0.5) * glow;
    gl_FragColor = vec4(glowColor, glow * 0.5);
}
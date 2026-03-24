<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
    defineProps<{
        type?: "note" | "tip" | "warning" | "danger" | "important";
        title?: string;
    }>(),
    { type: "note" },
);

const config = {
    note: {
        icon: "ℹ️",
        label: "Note",
        border: "#3b82f6",
        bg: "#eff6ff",
        titleColor: "#1d4ed8",
    },
    tip: {
        icon: "💡",
        label: "Tip",
        border: "#22c55e",
        bg: "#f0fdf4",
        titleColor: "#15803d",
    },
    warning: {
        icon: "⚠️",
        label: "Warning",
        border: "#f59e0b",
        bg: "#fffbeb",
        titleColor: "#b45309",
    },
    danger: {
        icon: "🚨",
        label: "Danger",
        border: "#ef4444",
        bg: "#fef2f2",
        titleColor: "#b91c1c",
    },
    important: {
        icon: "❗",
        label: "Important",
        border: "#a855f7",
        bg: "#faf5ff",
        titleColor: "#7e22ce",
    },
} as const;

const c = computed(() => config[props.type]);
const displayTitle = computed(() => props.title ?? c.value.label);
</script>

<template>
    <div
        :style="{
            borderLeft: `4px solid ${c.border}`,
            backgroundColor: c.bg,
            borderRadius: '6px',
            padding: '12px 16px',
            margin: '12px 0',
            fontFamily:
                '\'Apple SD Gothic Neo\', \'Noto Sans KR\', system-ui, sans-serif',
        }"
    >
        <div
            :style="{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '6px',
                color: c.titleColor,
                fontWeight: '700',
                fontSize: '0.9em',
                letterSpacing: '0.01em',
            }"
        >
            <span>{{ c.icon }}</span>
            <span>{{ displayTitle }}</span>
        </div>
        <div
            :style="{
                color: '#374151',
                fontSize: '0.85em',
                lineHeight: '1.65',
            }"
        >
            <slot />
        </div>
    </div>
</template>
